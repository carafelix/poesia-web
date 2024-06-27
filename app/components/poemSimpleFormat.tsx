export default function SimplePoem({ poem }: { poem: PoemEssentials }) {
    return (
        <>
            <pre>
                {poem.poemTitle} - {poem.poemSubindex}
                <hr />
                <br />
                {poem.poemText}
                <br />
                <br />
                <hr />
                <p>{poem.bookTitle}</p>
                <p>{poem.authorName}</p>
            </pre>
        </>
    )
}
