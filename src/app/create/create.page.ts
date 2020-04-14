import { Component, OnInit } from '@angular/core';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  user_id = "29";

  constructor() { }

  onSubmit(
    is_original: HTMLInputElement,
    sole_creator: HTMLInputElement,
    creative_status: HTMLInputElement,
    song_title: HTMLInputElement,
    artist_name: HTMLInputElement,
    genres: HTMLInputElement
  ): boolean {
    console.log(genres)
    const data = {
      is_original: is_original.value,
      sole_creator: sole_creator.value,
      creative_status: creative_status.value,
      song_title: song_title.value,
      artist_name: artist_name.value,
      user_id: this.user_id,
      genres: [genres],
      moods: ["107"],
      instruments: "Drums, Bass, Guitar, Synth, Voice",
      bpm: "100",
      lyrics: "",
      description: "",
    };
    console.log(data);
    // this.songService.createSong(data).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
    return false;
  }

}
