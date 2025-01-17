import { getServerSession } from 'next-auth';

// approach:1 Using useSession hook()

// export default function Home() {
//   return (
//     <SessionProvider>
//       <OtherHome/>
//     </SessionProvider>
//   );
// }

// function OtherHome(){
//   const session = useSession();

//   return <div>
//     {session.status == "authenticated" && <button onClick={()=>signOut()}>Signout</button>}
//     {session.status == "unauthenticated" && <button onClick={()=>signIn()}>Signin</button>}
//   </div>
// }

async function getUser() {
  const session = await getServerSession();
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      {JSON.stringify(session?.user?.name)}
    </div>
  );
}
