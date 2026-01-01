export interface FeatureProject {
  title: string;
  image: ImageInfo;
  duration: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ImageInfo {
  src: string;
  alt: string;
}
