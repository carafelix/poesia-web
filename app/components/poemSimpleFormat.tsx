export default function SimplePoem({ poem }: { poem: PoemEssentials }) {
    return (
        <>
            {poem.poemTitle} ― {poem.poemSubindex}
            <hr />
            <br />
            {poem.poemText.split('\n').map((line) => (
                <p>{line}</p>
            ))}
            <br />
            <hr />
            <p>{poem.bookTitle}</p>
            <p>{poem.authorName}</p>
        </>
    )
}
