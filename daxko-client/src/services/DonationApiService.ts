import { Constants } from "../Constants";
import Donation from "../data/model/Donation";
import DonationError from "../data/model/DonationError";
import Gift from "../data/model/Gift";

class DonationApiService {

  private get<T>(url: string) : Promise<T> {
      return fetch(url).then(res => {
        if(!res.ok){
          throw new Error(res.statusText);
        }
        return res.json() as Promise<T>;
      });
  }

  private post<T>(url: string, data: any) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if(!res.ok) {
        //console.log(res.json());
        return res.text().then(error => {
          throw new Error(error)
        });
      }
      return res.json() as Promise<T>;
    });
  }

  async getAllGifts() {
    return this.get<Gift[]>(`${Constants.BASE_URL}/gifts`);
  }

  postDonation(donation: Donation) : Promise<boolean> {
    return this.post<boolean>(`${Constants.BASE_URL}/donations`, donation);
  }
}

export default DonationApiService;