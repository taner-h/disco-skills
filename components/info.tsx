export function Info() {
  return (
    <article className="py-8 px-12 md:w-2/3 md:mx-auto md:pb-16 lg:w-1/2 xl:w-5/12">
      <h2 className="text-2xl md:text-3xl">Skill Editor Guide</h2>
      <p className="mb-2">
        To change the score for each skill, click on the skill card and view the
        side panel — the side panel will appear below the skills on smaller
        screens.
      </p>
      <p className="mb-2">
        On the side panel, you can click the &quot;Mark as Signature&quot;
        button to give the skill a +1 bonus. You can also click the arrows to
        update its score, and you can click &quot;INFO&quot; to read more about
        the skill.
      </p>
      <p className="text-sm md:text-base">
        Learn more about{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discoelysium.fandom.com/wiki/Attributes"
        >
          Attributes
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discoelysium.fandom.com/wiki/Skills"
        >
          Skills
        </a>
        .
      </p>
    </article>
  );
}
