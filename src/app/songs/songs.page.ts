import { Component, OnInit } from "@angular/core";

import { Song } from "../interfaces/song";

@Component({
  selector: "app-songs",
  templateUrl: "songs.page.html",
  styleUrls: ["songs.page.scss"],
})
export class SongsPage implements OnInit {
  songs: Song[];
  collaborations: Song[];
  projectsSegment = "songs";

  constructor() {}

  ngOnInit() {
    this.songs = [
      {
        song_id: 1023,
        song_uid: "88f9c590-5b04-11e9-8647",
        song_title: "All Blues",
        description:
          "Jazz composition and a twelve-bar blues in 6/4; the chord sequence is that of a basic blues and made up entirely of seventh chords, with a bVI in the turnaround instead of just the usual V chord.",
        created_on: "Feb. 12th, 1958",
      },
      {
        song_id: 1056,
        song_uid: "88f9c590-5b04-11e9-2399",
        song_title: "Freddie Freeloader",
        description:
          "A twelve-bar blues in Bb, but the chord over the final two bars of each chorus is an Ab7, not the traditional Bb7 followed by either F7 for a turnaround or some variation of B♭7 for an ending.",
        created_on: "Feb. 19th, 1958",
      },
      {
        song_id: 1102,
        song_uid: "88f9c590-5b04-33d5-9112",
        song_title: "Flamenco Sketches",
        description:
          "The piece has no written melody, but is rather defined by a set of chord changes that are improvised over using various modes. Each musician separately chose the number of bars for each of the modal passages in his solo.",
        created_on: "Jun. 11th, 1961",
      },
      {
        song_id: 1102,
        song_uid: "88f9c590-5b04-33d5-4213",
        song_title: "Boplicity",
        description:
          "The piece has no written melody, but is rather defined by a set of chord changes that are improvised over using various modes. Each musician separately chose the number of bars for each of the modal passages in his solo.",
        created_on: "Jun. 11th, 1961",
      },
      {
        song_id: 1102,
        song_uid: "88f9c590-5b04-33d5-9112",
        song_title: "Jean-Pierre",
        description:
          "The piece has no written melody, but is rather defined by a set of chord changes that are improvised over using various modes. Each musician separately chose the number of bars for each of the modal passages in his solo.",
        created_on: "Jun. 11th, 1961",
      },
      {
        song_id: 1102,
        song_uid: "88f9c590-5b04-33d5-9112",
        song_title: "You are Under Arrest",
        description:
          "The piece has no written melody, but is rather defined by a set of chord changes that are improvised over using various modes. Each musician separately chose the number of bars for each of the modal passages in his solo.",
        created_on: "Jun. 11th, 1961",
      },
    ];

    this.collaborations = [
      {
        song_id: 2097,
        song_uid: "88f9c590-5b04-11e9-3314",
        song_title: "Blue in Green",
        description:
          "Jazz composition and a twelve-bar blues in 6/4; the chord sequence is that of a basic blues and made up entirely of seventh chords, with a bVI in the turnaround instead of just the usual V chord.",
        created_on: "Feb. 12th, 1963",
      },
      {
        song_id: 1056,
        song_uid: "88f9c590-5b04-11e9-0091",
        song_title: "Someday My Prince Will Come",
        description:
          "A twelve-bar blues in Bb, but the chord over the final two bars of each chorus is an Ab7, not the traditional Bb7 followed by either F7 for a turnaround or some variation of B♭7 for an ending.",
        created_on: "Feb. 19th, 1971",
      },
    ];

    this.songs.sort((a, b) => a.song_title.localeCompare(b.song_title));
    this.collaborations.sort((a, b) =>
      a.song_title.localeCompare(b.song_title)
    );
  }

  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }
}
