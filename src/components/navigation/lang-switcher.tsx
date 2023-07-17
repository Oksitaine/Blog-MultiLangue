

export default function LangSwitcher({local} : {local : string}) {

    return (
        <>
            <p>{local.toUpperCase()}</p>
        </>
    )
}