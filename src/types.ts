export interface IResDto {
    skip: number;
    limit: number;
    total: number;
  }
  
  export interface IPagination {
    skip?: number;
    limit?: number;
  }

export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: Array<string> | string;
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
    userId: number;
  }

  export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    ip: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  }

  export interface IComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: {
      id: number;
      username: string;
      fullName: string;
    };
  }