import Logo from "../assets/Brit.png";
import {Menu} from "lucide-react";
import {Button} from "../components/Button.tsx";
export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon">
                <Menu/>
            </Button>
            <a href="/">
                <img src={Logo} alt="logo" className="h-6"/>
            </a>
        </div>
        <div></div>
        <div></div>
    </div>;
}