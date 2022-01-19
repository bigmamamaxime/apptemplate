import { Routing } from "./routers/Routing"
import { NavigationBar } from "./components/navigationbar/NavigationBar"
import { UserProvider } from "./shared/global/provider/UserProvider"
import "./shared/global/css/Global.css"

export const App=() => {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}