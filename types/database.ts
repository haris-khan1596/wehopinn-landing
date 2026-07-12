export type InquiryStatus = "new" | "in_progress" | "completed" | "cancelled";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      student_inquiries: {
        Row: {
          id: string;
          created_at: string;
          full_name: string;
          phone: string;
          email: string;
          university: string;
          campus: string;
          program: string;
          home_city: string;
          status: InquiryStatus;
          notes: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          full_name: string;
          phone: string;
          email: string;
          university: string;
          campus: string;
          program: string;
          home_city: string;
          status?: InquiryStatus;
          notes?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          full_name?: string;
          phone?: string;
          email?: string;
          university?: string;
          campus?: string;
          program?: string;
          home_city?: string;
          status?: InquiryStatus;
          notes?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type StudentInquiry = Database["public"]["Tables"]["student_inquiries"]["Row"];
export type StudentInquiryInsert =
  Database["public"]["Tables"]["student_inquiries"]["Insert"];
