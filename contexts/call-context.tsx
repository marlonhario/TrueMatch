// "use client";
// import { createClient } from "@/lib/supabase/client";
// import { User } from "@supabase/supabase-js";
// import { useRouter } from "next/navigation";
// import { createContext, useContext, useEffect, useState } from "react";

// interface CallContextType {
//   showVideoCall: boolean;
//   videoCallId: string;
//   isCallInitiator: boolean;
//   handleCallEnd(): void;
// }

// const AuthContext = createContext<CallContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const supabase = createClient();
//   const router = useRouter();
//   const [showVideoCall, setShowVideoCall] = useState(false);
//     const [videoCallId, setVideoCallId] = useState<string>("");

//   useEffect(() => {
//     async function checkUser() {
//       try {
//         const {
//           data: { session },
//         } = await supabase.auth.getSession();

//         setUser(session?.user ?? null);
//         console.log(session?.user);
//         const {
//           data: { subscription },
//         } = supabase.auth.onAuthStateChange(async (event, session) => {
//           setUser(session?.user ?? null);
//         });

//         return () => subscription.unsubscribe();
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     checkUser();
//   }, []);

//   async function signOut() {
//     try {
//       await supabase.auth.signOut();
//       router.push("/auth");
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   }

//   return (
//     <AuthContext.Provider value={{ user, loading, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }