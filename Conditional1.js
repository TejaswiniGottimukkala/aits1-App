function Item({name,isPacked}){
    if(isPacked){
    return<li className="item">{name} .packed</li>
}
return<li className="item">{name}</li>
}
export default function PackingList(){

    return(
        <section>
            <h1>Kusum's Packaging List</h1>
            <ul>
                <Item
                isPacked={true}
                name="Collar Blazor"
                />
                <Item
                isPacked={true}
                name="Hat with a golden leaf"
                />
                <Item
                isPacked={false}
                name="High heels"
                />
                <Item
                isPacked={true}
                name="Golden brown gown"
                />
            </ul>
        </section>
    );
}