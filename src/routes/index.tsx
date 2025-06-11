import LogIn from "../components/ui/logIn.tsx";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  //return <div>Hello "/"!</div>
  return <LogIn />;
}
