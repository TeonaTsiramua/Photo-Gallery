export interface Photos {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  width: number;
  height: number;
  color: string | null;
  user: {
    username: string;
    name: string;
  };
  likes: number;
  alt_description: string | null;
}
