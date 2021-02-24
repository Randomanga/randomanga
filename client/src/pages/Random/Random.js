export default function Random(props) {
    console.log(props.match.params.id);
    return (
        <main className="mt-14">
            <h1 className="text-white">Random Page</h1>;
        </main>
    );
}
