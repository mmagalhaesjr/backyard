import { useEffect } from "react";
import Header2 from "../../Components/Header2/Header2";
import { StyledMenu } from "./styled";

export default function Menu() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, [])
        
    return (
        <StyledMenu>
              <Header2 />
menu
        </StyledMenu>
    )
}