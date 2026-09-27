import Image from "next/image";

type Props = { className?: string; priority?: boolean };

const SIZE = 1000;

function illustration(slug: string) {
  function Illustration({ className = "", priority }: Props) {
    return (
      <Image
        src={`/illustrations/${slug}.webp`}
        alt=""
        aria-hidden
        width={SIZE}
        height={SIZE}
        priority={priority}
        draggable={false}
        className={`object-contain select-none ${className}`}
      />
    );
  }
  return Illustration;
}

export const RainCloud = illustration("rain-cloud");
export const GroupHug = illustration("group-hug");
export const NightWindow = illustration("night-window");
export const Sleepless = illustration("sleepless");
export const MirrorPerson = illustration("mirror");
export const FriendsArch = illustration("friends-arch");
export const Doubts = illustration("doubts");
export const TangledStudy = illustration("tangled-study");
export const Overwhelmed = illustration("overwhelmed");
export const PeopleCircle = illustration("people-circle");
export const PeopleRing = illustration("people-ring");
export const HeartCare = illustration("heart-care");
export const BreakingFree = illustration("breaking-free");
export const Meditate = illustration("meditate");
export const PhoneTalk = illustration("phone-talk");
export const Blanket = illustration("blanket");
export const Therapist = illustration("therapist");
export const HeadProfile = illustration("head-profile");
export const BrainTangle = illustration("brain");
export const FlowerBook = illustration("flower-book");
export const PeopleCircleNew = illustration("people-circle-new");
export const StudentSad = illustration("student-sad");
export const StudentHappy = illustration("student-happy");
export const OldLady = illustration("old-lady");
