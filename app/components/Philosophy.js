export function Philosophy({ prideData, goalData }) {
    return (
        <section className="py-20 px-6" style={{ backgroundColor: "#092C4C" }}>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 text-white">

                {/* Worauf bin ich stolz */}
                <div>
                    <h2 className="text-3xl font-bold mb-6" style={{ color: "#F2994A" }}>
                        {prideData.title}
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        {prideData.text}
                    </p>
                </div>

                {/* Portfolio Goal */}
                <div>
                    <h2 className="text-3xl font-bold mb-6" style={{ color: "#F2994A" }}>
                        {goalData.title}
                    </h2>
                    <p className="text-lg leading-relaxed opacity-90">
                        {goalData.text}
                    </p>
                </div>

            </div>
        </section>
    );
}
