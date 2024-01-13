export default function QuestionForm({ getData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" />
      <input type="submit" value="Enviar" />
    </form>
  );
}
