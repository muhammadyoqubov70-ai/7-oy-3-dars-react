import { useParams, Link } from "react-router-dom";
import { Palette, Zap, Shield, ArrowLeft } from "lucide-react";
import { features } from "../data/features";

const icons = { Palette, Zap, Shield };

export default function FeatureDetail() {
  const { id } = useParams();
  const feature = features.find((f) => f.id === id);

  if (!feature) {
    return (
      <div className="page">
        <h1>Not Found</h1>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  const Icon = icons[feature.icon];

  return (
    <div className="page detail-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back
      </Link>
      <div className="detail-icon">
        <Icon size={48} />
      </div>
      <h1>{feature.title}</h1>
      <p>{feature.details}</p>
    </div>
  );
}
