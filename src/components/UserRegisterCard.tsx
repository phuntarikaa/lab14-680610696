import type { Registrant } from "../libs/Registrant";


export default function UserRegisterCard({
  id,
  fullName,
  gender,
  plan,
  total,
  extraItems,
}:Registrant) {
  
  
  //registrant.gender === "male"   -> "👨 Male"
  //registrant.gender === "female" -> "👩 Female"
  const genderDisplay = gender === "male" ? "👨 Male" : gender === "female" ? "👩 Female" : gender;
  return (
  <div key={id} className="card p-3">
    <div className="d-flex justify-content-between">
      <span className="fw-semibold">{fullName}</span>
      <span className="fw-semibold">{total} THB</span>
    </div>
    <small className="text-muted">{plan} · {genderDisplay}</small>
    <div className="mt-1 d-flex flex-wrap gap-1">
        {extraItems?.map((item, index) => (
          <span key={index} className="badge text-bg-light border">
            {item}
          </span>
        ))}
    </div>
  </div>
);
}
