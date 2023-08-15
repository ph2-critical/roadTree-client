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
      back_node_depth1: {
        Row: {
          created_at: string | null;
          id: number;
          node_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          node_id: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          node_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "back_node_depth1_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      back_node_depth2: {
        Row: {
          created_at: string | null;
          id: number;
          node_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          node_id: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          node_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "back_node_depth2_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      back_node_depth3: {
        Row: {
          created_at: string | null;
          id: number;
          node_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          node_id: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          node_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "back_node_depth3_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      back_ref: {
        Row: {
          created_at: string | null;
          ref_id: string;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          ref_id: string;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          ref_id?: string;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "back_ref_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      front_node_depth1: {
        Row: {
          created_at: string | null;
          node_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          node_id?: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          node_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "front_node_depth1_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      front_node_depth2: {
        Row: {
          created_at: string | null;
          id: number;
          node_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          node_id: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          node_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "front_node_depth2_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      front_node_depth3: {
        Row: {
          created_at: string | null;
          id: number;
          node_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          node_id: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          node_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "front_node_depth3_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      front_ref: {
        Row: {
          created_at: string | null;
          ref_id: number;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          ref_id: number;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          ref_id?: number;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "front_ref_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      node: {
        Row: {
          created_at: string | null;
          depth: number;
          description: string | null;
          name: string;
          nid: string;
          parent_node_nid: string | null;
          type: string;
        };
        Insert: {
          created_at?: string | null;
          depth: number;
          description?: string | null;
          name: string;
          nid?: string;
          parent_node_nid?: string | null;
          type: string;
        };
        Update: {
          created_at?: string | null;
          depth?: number;
          description?: string | null;
          name?: string;
          nid?: string;
          parent_node_nid?: string | null;
          type?: string;
        };
        Relationships: [
          {
            foreignKeyName: "node_parent_node_nid_fkey";
            columns: ["parent_node_nid"];
            referencedRelation: "node";
            referencedColumns: ["nid"];
          },
        ];
      };
      node_reference: {
        Row: {
          created_at: string | null;
          nid: string;
          rid: string;
        };
        Insert: {
          created_at?: string | null;
          nid: string;
          rid: string;
        };
        Update: {
          created_at?: string | null;
          nid?: string;
          rid?: string;
        };
        Relationships: [
          {
            foreignKeyName: "node_reference_nid_fkey";
            columns: ["nid"];
            referencedRelation: "node";
            referencedColumns: ["nid"];
          },
          {
            foreignKeyName: "node_reference_rid_fkey";
            columns: ["rid"];
            referencedRelation: "reference";
            referencedColumns: ["rid"];
          },
        ];
      };
      node_state: {
        Row: {
          created_at: string | null;
          nid: string;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          nid: string;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          nid?: string;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "node_state_nid_fkey";
            columns: ["nid"];
            referencedRelation: "node";
            referencedColumns: ["nid"];
          },
          {
            foreignKeyName: "node_state_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      ref_state: {
        Row: {
          created_at: string | null;
          rid: string;
          state: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          rid: string;
          state?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          rid?: string;
          state?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "ref_state_rid_fkey";
            columns: ["rid"];
            referencedRelation: "reference";
            referencedColumns: ["rid"];
          },
          {
            foreignKeyName: "ref_state_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      reference: {
        Row: {
          amount: string | null;
          category: string;
          created_at: string;
          grade: number | null;
          price: number | null;
          rid: string;
          title: string;
          url: string;
        };
        Insert: {
          amount?: string | null;
          category: string;
          created_at?: string;
          grade?: number | null;
          price?: number | null;
          rid?: string;
          title: string;
          url: string;
        };
        Update: {
          amount?: string | null;
          category?: string;
          created_at?: string;
          grade?: number | null;
          price?: number | null;
          rid?: string;
          title?: string;
          url?: string;
        };
        Relationships: [];
      };
      submissions: {
        Row: {
          category: string;
          content: string | null;
          created_at: string | null;
          id: number;
          nickname: string;
          study: string;
          url: string | null;
        };
        Insert: {
          category: string;
          content?: string | null;
          created_at?: string | null;
          id?: number;
          nickname: string;
          study: string;
          url?: string | null;
        };
        Update: {
          category?: string;
          content?: string | null;
          created_at?: string | null;
          id?: number;
          nickname?: string;
          study?: string;
          url?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
