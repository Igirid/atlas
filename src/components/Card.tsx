interface CardProps {
    title: string;
    value: string;
    percent: string;
  }
  
  export function Card({ title, value, percent }: CardProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <span className={`text-sm ${percent.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{percent}</span>
      </div>
    );
  }
  