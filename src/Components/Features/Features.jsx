import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrophy,
  faShieldHalved,
  faTruckFast,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  const features = [
    {
      icon: faTrophy,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: faShieldHalved,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: faTruckFast,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: faHeadset,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <section className="w-full bg-[#faf5ed] px-8 py-12">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center">
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-[34px] text-[#292929]"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[16px] font-bold text-[#292929]">
                {feature.title}
              </h3>

              <p className="mt-1 text-[13px] text-[#999999]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;