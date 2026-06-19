export interface Review {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  timestamp: any; // Firestore Timestamp
  approved: boolean;
}
