interface AddPageProps {}

export default function AddPage(props: AddPageProps) {
  return (
    <div className="add-page">
      <h1>Contribute</h1>
      <p>
        You wan add new word? Fill the form wey dey down make you fit see your
        word for the game.
      </p>
      <form className="mx-auto flex max-w-lg flex-col gap-3 p-8" action="">
        <input
          type="text"
          placeholder="Wetin be the word?"
          className="input-bordered input w-full text-sm"
        />
        <textarea
          className="textarea-bordered textarea"
          placeholder="Wetin be the meaning?"
        ></textarea>
        <textarea
          className="textarea-bordered textarea"
          placeholder="Abeg, make you give some examples wey dey separate with comma (,)"
        ></textarea>

        <input
          type="text"
          placeholder="Your name nko?"
          className="input-bordered input w-full text-sm"
        />
        
        <button className="btn">Send</button>
      </form>
    </div>
  );
}
