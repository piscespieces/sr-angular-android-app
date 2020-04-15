import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SongService {
  URI = "http://ec2-54-236-147-37.compute-1.amazonaws.com/smv1/api/songs/";

  constructor(private http: HttpClient) {}

  createSong(params) {
    const headers = {
      headers: {
        "API-KEY": "152bbc3a-4c39-41fd-9799-028cf2843043",
        "Content-Type": "application/json",
      },
    };
    return this.http.post(this.URI, params, headers);
  }
}
