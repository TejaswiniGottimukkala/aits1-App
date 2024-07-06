const people=[
    'Creola Katherine Jhonson:Mathematician',
    'Salim Ali:Anthrologist',
    'Mario Jose Molina-Pasquel Henriquez:Chemist',
    'Mohammad Abdus Salam:Physicist',
    'Percy Lavon Julician:Chemist',
    'Subrahmanyam Chandrasekhar:Astrophysicist'
];
export default function PplList(){
    const listItems=people.map(person=>
        <li>{person}</li>
    );
    return<ul>list{listItems}</ul>;
}
