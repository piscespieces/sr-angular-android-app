import { Component, OnInit } from "@angular/core";
import { SongService } from "../services/song/song.service";
import { AlertController } from "@ionic/angular";

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
    public alertController: AlertController
  ) {}

  async originalSongAlert() {
    const alert = await this.alertController.create({
      header: "Cannot Create Song",
      // subHeader: "Subtitle",
      message:
        "At this moment we are only accepting new and original ideas. We will be implementing the possibility to register a cover or if your song contains parts (such as samples) in the near future.",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async soleCreatorAlert() {
    const alert = await this.alertController.create({
      header: "Quick Alert",
      // subHeader: "Subtitle",
      message:
        "Please note that if you say no you will be required to enter the collaborator(s) name and email and they will need to agree before the work is registered",
      buttons: ["OK", "CANCEL"],
    });

    await alert.present();
  }

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

    if (!data.is_original) {
      this.originalSongAlert();
    } else if (!data.sole_creator) {
      this.soleCreatorAlert();
      console.log(data);
    } else {
      console.log(data);
    }
    // this.songService.createSong(data).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
    return false;
  }
}
