const FeatureItem = (props) => (
  <div className="feature">
    <picture>
      <img src={props.featureIcon} alt={`${props.featureTitle} icon`} />
    </picture>
    <h3>{props.featureTitle}</h3>
    <p>{props.featureDescription}</p>
  </div>
)
export default FeatureItem
