export default function MainSpec({selectedCar}) {
    return (
        // root section
        <section className="flex justify-center">


            {/*
                flex = 현재 태그를 Flexbox 컨테이너로 설정
                justify-center = 자식 요소들을 가운데로 정렬
                py = 위아래 여백
            */}

            <div className="container flex justify-center py-8">
                {/* 차 이름, 이미지 */}
                <div className="models-mainspec-car">
                    <p className="models-mainspec-car-name">{selectedCar.name} {selectedCar.name2}</p>

                    <img 
                        src={selectedCar.image}
                        alt={selectedCar.name}
                    />
                </div>

                {/* 스펙 */}
                <div>
                    <table className="models-mainspec-table">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left bg-gray-100 text-base border-b border-gray-200">항목</th>
                                <th className="py-2 px-4 text-left bg-gray-100 text-base border-b border-gray-200">내용</th>
                            </tr>
                        </thead>

                        <tbody>
                            {selectedCar.specs.map((spec, index) => (
                                <tr
                                key={index}
                                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    <td className="py-2 px-4 border-b border-gray-200">{spec.label}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </section>
    );
}