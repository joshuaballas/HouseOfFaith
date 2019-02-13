import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ytKey = 'AIzaSyCwAnY1pbey1YaBVu4pyxsuG6ouCuW_RQc';
const channelID = 'UC3TyCy83iqLJ16pLYWT3ZGg';
const liveURL =
  `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&eventType=live&maxResults=1&type=video&key=${ytKey}`;

@Injectable()
export class YouTubeService {
  public isLive: boolean;

  constructor(private http: HttpClient) { }

  public youtubeLiveCheck(): Promise<any> {
    return this.http.get(liveURL).toPromise();
  }
}
