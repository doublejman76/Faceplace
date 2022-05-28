import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users: User[] = [
    {
      id: 0,
      name: 'Example Examplington',
      imagePath: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      bio: 'I have always felt I would make an excellent example of a typical user on a website!',
      posts: [
        {
          userName: 'Example Examplington',
          name: 'Hello World!',
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat modi exercitationem magnam libero quidem quibusdam iste beatae accusantium? Animi incidunt odio praesentium velit? Aperiam quo unde cumque ad! Sunt ratione pariatur inventore sapiente magni explicabo aperiam laborum perferendis blanditiis, praesentium, quae, aut voluptate a fuga? Aspernatur perferendis asperiores veniam voluptas?',
          date: new Date(2021, 10, 26, 11, 22),
          likes: 1,
        },
        {
          userName: 'Example Examplington',
          name: 'Scooby Dooby Doo, Where Are You?',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 3, 23, 8, 51),
          likes: 2,
        },
        {
          userName: 'Example Examplington',
          name: "You Want Some Dummy Text? Well I'll Give Ya Some Dummy Text!",
          content:
            'arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque',
          date: new Date(2020, 11, 16, 12, 14, 12),
          likes: 1,
        },
      ],
      isFriends: false,
    },
    {
      id: 1,
      name: 'The Ultimate Warrior',
      imagePath:
        'https://www.biography.com/.image/t_share/MTgwNzg0MTk2OTQ2NTY4NTUy/ultimate-warrior-03.jpg',
      bio: 'I like to Gorilla Press my enemies for breakfast!',
      posts: [
        {
          userName: 'The Ultimate Warrior',
          name: 'Steroids and YOU: Get Big, Loud, and Mean Before Spring Break!',
          content:
            'ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam',
          date: new Date(2019, 4, 16, 20, 11),
          likes: 3,
        },
        {
          userName: 'The Ultimate Warrior',
          name: 'How to Safely Fall (or be thrown) Through A Table!',
          content:
            'suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque',
          date: new Date(2019, 3, 19, 19, 19),
          likes: 1,
        },
        {
          userName: 'The Ultimate Warrior',
          name: 'Everybody was Acting Except Hulk Hogan, All His Stuff Was Real.',
          content:
            'diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a',
          date: new Date(2021, 10, 19, 23, 21),
          likes: 2,
        },
      ],
      isFriends: false,
    },
    {
      id: 2,
      name: 'Boba Fett',
      imagePath:
        'https://nypost.com/wp-content/uploads/sites/2/2021/09/book-of-boba-fett-key-art.jpg?quality=80&strip=all',
      bio: '....as you wish..',
      posts: [
        {
          userName: 'Boba Fett',
          name: 'Why You Should Buy Your Kid a Boba Fett Action Figure (and NOT a Mandalorian one) This Holiday Season',
          content:
            'justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque',
          date: new Date(2021, 11, 15, 14, 14),
          likes: 3,
        },
        {
          userName: 'Boba Fett',
          name: 'My Ship Was Cooler than the Millenium Falcon and You Know It',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 10, 18, 18, 43),
          likes: 6,
        },
        {
          userName: 'Boba Fett',
          name: "So You Finally Got That Flamethrower You've Been Asking For. Now What?",
          content:
            'nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit',
          date: new Date(2021, 3, 23, 8, 51),
          likes: 4,
        },
      ],
      isFriends: false,
    },
    {
      id: 3,
      name: 'The Wolf Man',
      imagePath:
        'https://i.pinimg.com/originals/4c/75/8a/4c758a89ee726431a8902e01b008dd7a.jpg',
      bio: 'I love beef chow mein',
      posts: [
        {
          userName: 'The Wolf Man',
          name: "I'm from a 1941 horror movie you probably haven't seen",
          content:
            'ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget',
          date: new Date(2021, 11, 11, 11, 51),
          likes: 3,
        },
        {
          userName: 'The Wolf Man',
          name: 'I was played by Lon Chaney, Jr.',
          content:
            'velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus',
          date: new Date(2021, 10, 7, 13, 22),
          likes: 2,
        },
        {
          userName: 'The Wolf Man',
          name: 'I have the coolest profile pic on this silly website',
          content: "...and it's not even close",
          date: new Date(2021, 9, 18, 17, 49),
          likes: 6,
        },
      ],
      isFriends: false,
    },
    {
      id: 4,
      name: 'Shaggy Rogers',
      imagePath:
        'https://cdn.hanna-barberawiki.com/thumb/8/82/Shaggy_Rogers.png/1200px-Shaggy_Rogers.png',
      bio: "Like what's up man! Professional detective and foodie from Coolsville, Ohio.",
      posts: [
        {
          userName: 'Shaggy',
          name: 'Like, anybody know how to fix a broken down van?',
          content:
            "The Mystery Machine is acting up again. Fred seems to think I'm like some kind of mechanic, so me and Scoob gotta fix it.",
          date: new Date(2021, 6, 4, 13, 22),
          likes: 2,
        },
        {
          userName: 'Shaggy',
          name: 'Like, what do you feed a talking dog?',
          content:
            "So like, PETA has been giving me a lot of calls lately. Apparently dogs aren't supposed to have sandwiches, steaks, milkshakes, or like any of the other stuff that Scoob and I usually chow down on over the course of a mystery. Scoob has always been cool with it, so like I guess I never think about it. What am I supposed to be feeding him?",
            date: new Date(2021, 11, 12, 13, 23),
            likes: 5,
        },
      ],
      isFriends: false,
    },
    {
      id: 5,
      name: 'Burgermeister Meisterburger',
      imagePath: 'data:image/jpeg;base64,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',
      bio: 'I hate toys! And toys hate me. Either they are going or I am going! And I am certainly not going.',
      posts: [
        {
          userName: "Burgermeister Meisterburger",
          name: "Stop buying your bratty kids TOYS!!!",
          content: "Ever since I was ousted as the burgermeister of Sombertown, the whole world has gone to sh*t. All these little children, smiling and laughing and carrying on. It's infuriating!!! We must put a stop to this!",
          date: new Date(2021, 11, 23, 14, 22),
          likes: -2,
        }
      ],
      isFriends: false,
    }
  ];

  getUsers() {
    return this.users.slice();
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  fetchPosts(): Post[] {
    let allPosts = this.users.map((user) => user.posts);
    let mergedPosts = [].concat.apply([], allPosts);

    return mergedPosts;
  }

  addFriend(user: User) {
  //  user.isFriends = true;
  }

  deleteFriend(user: User) {
  //  user.isFriends = false;
  }

  likePost(post: Post) {
    post.likes++;
  }

  dislikePost(post: Post) {
    post.likes--;
  }
}
