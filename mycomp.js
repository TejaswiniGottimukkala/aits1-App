const myname=prompt("What is your name?")
const myclg=prompt("What is your clgname?")
const mybranch=prompt("What is your branchname?")
export default function Hello(){
    return(
        <>
        <h1>My name is {myname}</h1>
        <h1>My name is {myclg}</h1>
        <h1>My name is {mybranch}</h1>
        </>
    );
}