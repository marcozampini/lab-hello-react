import FeatureItem from './FeatureItem'

import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const features = [
  {
    featureTitle: 'Declarative',
    featureDescription: 'React makes it painless to create interactive UIs.',
    featureIcon: icon1,
  },
  {
    featureTitle: 'Components',
    featureDescription:
      'Build encapsulated components that manage their state.',
    featureIcon: icon2,
  },
  {
    featureTitle: 'Single-Way',
    featureDescription:
      "A set of immutable values are passed to the component's.",
    featureIcon: icon3,
  },
  {
    featureTitle: 'JSX',
    featureDescription: 'Statically-typed, designed to run on modern browsers.',
    featureIcon: icon4,
  },
]

const FeaturesList = () => (
  <section className="features">
    {features.map((feature, index) => {
      // some comment here
      return (
        <FeatureItem
          key={index}
          featureTitle={feature.featureTitle}
          featureDescription={feature.featureDescription}
          featureIcon={feature.featureIcon}
        />
      )
    })}
  </section>
)
export default FeaturesList
