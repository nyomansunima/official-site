import * as React from 'react'
import { ContentImage } from '@shared/components'

export function SharingSection(): React.ReactElement {
  return (
    <section>
      <br />

      <div className="flex flex-col gap-2 not-prose mt-10">
        <span className="text-sm text-foreground/60 font-mono">Sharing.</span>
        <h2>I love to read, write, and share the toughts</h2>
      </div>

      <p>
        I'm passionate about sharing my knowledge and experiences with others.
        Whether it's through blog posts, podcasts, or social media, I believe
        that sharing is a powerful tool for personal growth and professional
        development. By sharing my insights and expertise, I can inspire and
        empower others to achieve their goals.
      </p>

      <ContentImage
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729709291876/a59a6504-a98b-4818-955f-efba3364d5b6.jpeg"
        alt="Read, write and share"
      />

      <p>
        I spare my time to educate and grow my knowledge into become better one
        and understand the problem really well. I like to read books, watching
        video from other creators and even following the training. It's make me
        understand and have a knowledge to solve the prolem. Because i can find
        some references and see how other people solve and do it corectly. So i
        can see the bigger picture and find the best solutions for it.
      </p>

      <p>
        I'm dedicated to continuous learning and staying up-to-date with the
        latest trends and technologies. I believe that knowledge is power, and
        by sharing it, I can help others unlock their full potential.
      </p>

      <p>
        I'm committed to being a positive influence and a role model for others.
        By sharing my journey and experiences, I can inspire and motivate others
        to pursue their dreams and make a difference in the world.
      </p>
    </section>
  )
}
