const Articles = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Полезные статьи</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><a href="#" className="text-blue-500 hover:underline">Как правильно питаться?</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Польза утренней зарядки</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Как улучшить сон?</a></li>
      </ul>
    </section>
  );
};

export default Articles;