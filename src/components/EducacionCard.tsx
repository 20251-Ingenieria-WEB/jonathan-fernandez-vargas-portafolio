interface EducationCardProps {
  institution: string;
  period: string;
  title: string;
  description: string;
}

export default function EducationCard({ institution, period, title, description }: EducationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{institution}</h3>
      <p className="text-sm text-gray-500">{period}</p>
      <h4 className="mt-2 text-md font-medium text-indigo-600">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
