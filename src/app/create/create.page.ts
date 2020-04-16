import { Component, OnInit } from "@angular/core";
import { SongService } from "../services/song/song.service";
import { AlertsService } from "../helper/alerts.service";
import { ToastService } from "../helper/toast.service";
import { Router } from "@angular/router";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
  styleUrls: ["./create.page.scss"],
})
export class CreatePage {
  user_id = "29";

  ctx_genres = [
    {
      id: "1",
      name: "Rock",
    },
    {
      id: "2",
      name: "Pop",
    },
  ];

  ctx_instruments = [
    {
      name: "Voice",
    },
    {
      name: "Guitar",
    },
    {
      name: "Piano",
    },
    {
      name: "Keyboard/Synth",
    },
    {
      name: "Bass",
    },
    {
      name: "Drums",
    },
  ];

  ctx_moods = [
    {
      id: "201",
      name: "Happy",
    },
    {
      id: "202",
      name: "Relax",
    },
  ];

  constructor(
    private songService: SongService,
    private alertService: AlertsService,
    private toastService: ToastService,
    private router: Router
  ) {}

  onSubmit(
    is_original: HTMLInputElement,
    sole_creator: HTMLInputElement,
    creative_status: HTMLInputElement,
    song_title: HTMLInputElement,
    artist_name: HTMLInputElement,
    genres: HTMLInputElement,
    instruments: HTMLInputElement,
    moods: HTMLInputElement,
    bpm: HTMLInputElement,
    lyrics: HTMLTextAreaElement,
    description: HTMLTextAreaElement
  ): boolean {
    const data = {
      user_id: this.user_id,
      is_original: is_original.value,
      sole_creator: sole_creator.value,
      creative_status: creative_status.value,
      song_title: song_title.value,
      artist_name: artist_name.value,
      genres: genres.value,
      moods: moods.value,
      instruments: instruments.value.toString(),
      bpm: bpm.value,
      lyrics: lyrics.value,
      description: description.value,
    };

    if (
      Boolean(song_title.value) != false &&
      Boolean(artist_name.value) != false &&
      Boolean(is_original.value) != false &&
      Boolean(sole_creator.value) != false
    ) {
      console.log("se envio");
      // this.songService.createSong(data).subscribe(
      //   (res) => console.log(res),
      //   (err) => console.log(err)
      // );
      this.toastService.successToast();
      setTimeout(() => {
        this.router.navigate(["/tabs/songs"]);
      }, 2500);
    }

    switch (false) {
      case Boolean(song_title.value):
        this.alertService.songNameAlert();
        break;
      case Boolean(artist_name.value):
        this.alertService.artistAlert();
        break;
      case Boolean(data.is_original):
        this.alertService.originalSongAlert();
        break;
      case Boolean(data.sole_creator):
        this.alertService.soleCreatorAlert();
        break;
    }

    return false;
  }

  nonOriginal() {
    this.alertService.originalSongAlert();
  }

  nonSoleCreator() {
    this.alertService.soleCreatorAlert();
  }
}
