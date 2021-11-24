import { Http, Response, Headers, ResponseContentType, RequestOptions, URLSearchParams } from "@angular/http";
import { environment } from "../../../environments/environment";


export abstract class AbstractResource<Entity> {

  url: string = environment.apiUrl;

  constructor(private http: Http, private endPoint: string) {
    if (endPoint) {
      this.url = this.url + endPoint;
    }
  }

  private getUrl(): string {
    return this.url;
  }

}

