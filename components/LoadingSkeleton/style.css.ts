import { keyframes, style } from "@vanilla-extract/css";

const loadingSkeletonAnimation = keyframes({
  from: {
    backgroundPosition: "-468px 0",
  },
  to: {
    backgroundPosition: "468px 0",
  },
});

export const loadingSkeleton = style({
  position: "relative",
  width: 200,
  height: 120,
  borderRadius: 12,
  animation: `${loadingSkeletonAnimation} 1.25s 4 linear forwards`,
  background:
    "linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%)",
  backgroundSize: "800px 100%",
});
