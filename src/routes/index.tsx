import LogIn from "../components/pages/logIn.tsx";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  //return <div>Hello "/"!</div>
  return <LogIn />;
}
