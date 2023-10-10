import { ProductList } from "./ProductList";
import { ProductWaiter } from "./ProductWaiter";

export function ViewChef() {
    const [view, setView] = useState([])

    return(
        <>
        <header className="title-viewchef">
            <h2>Orders to prepare</h2>
        </header>
        <section className="container-list-order">
            <ul>
                <li>

                </li>
            </ul>

        </section>
        
        </>
    )
}