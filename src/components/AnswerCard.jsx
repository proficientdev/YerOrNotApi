export default function AnswerCard({ answer, image }) {
  return (
    <div>
      <h1>{answer}</h1>
      <img src={image} alt="" width={100} />
    </div>
  );
}
