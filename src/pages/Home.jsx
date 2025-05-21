const Home = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Главная</h2>
      <p className="mb-4">
        Здоровье — это самое ценное, что у нас есть. Начните с малого: больше воды, физическая активность, полноценный сон.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Читать статьи
      </button>
    </section>
  );
};

export default Home;