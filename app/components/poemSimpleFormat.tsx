export default function SimplePoem({ poem }: { poem: PoemEssentials }) {
    return (
        <div>
            {poem.title}
            <hr />
            {poem.text}
            <hr />
            {poem.book}
            <hr />
            {poem.author}
        </div>
    )
}
