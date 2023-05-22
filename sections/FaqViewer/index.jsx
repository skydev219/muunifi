import { useEffect, useState } from "react";
import styles from "./FaqViewer.module.scss"
import { Container, Row, Col, Collapse } from "react-bootstrap";
import { IconChevronDown } from "../../components/Icon"

const list = [
  {
    title: "General",
    list: [
      {
        question: "What is muunifi?",
        answer: "Muunifi is a social platform built for democratizing financial education built on the principle of a “trust” algorithm that allows users to find successful financial content creators. Creators can monetize their work through muunifi’s subscription service, rather than a traditional ad based model. Muunify attempts to “even the playing field” for everyday investors by giving them resources to become more financially literate."
      },
    ]
  },
  {
    title: "Posts",
    list: [
      {
        question: "How do I create a post?",
        answer: "To create a post on muunifi, tap the + icon located at the bottom of the screen. From there, you can write a post of up to 500 characters, add pictures, videos, and polls (these icons are located on the bottom left side of the text box). You can add up to 10 photos with each post. You can also select up to 3 tags to help categorize your post. Allow comments and shares from other users with the toggle buttons at the bottom of the page. Posts can be made for the entire community to see or for your subscribers, which can be changed at the top of the screen with the “Public” and “Subscribers Only” buttons. Once you finish making your post, tap the post button in the bottom left to send it to other users’ feeds."
      },
      {
        question: "Are there any requirements to use muunifi?",
        answer: "muunifi is available on your web browser at muunifi.com or can be downloaded for both iOS and android mobile devices. For new users, an account is needed to post and view content shared by other users. You’ll be prompted to create an account from any of the locations listed above. Need help creating an account? Read more here."
      },
      {
        question: "How do I share content from other users?",
        answer: "if you find a post on your feed that you would like your followers to see, you can repost it with the share icon directly under the post. You can add on your thoughts, photos, videos, polls, and tags, just like a regular post. Once posted, both the original post and your new content will be seen together on your follower’s feeds."
      },
      {
        question: "Can I edit my posts?",
        answer: "To edit a post, simply tap theicon in the top right corner of the post you’d like to edit, and navigate to “Edit Post”. Make any changes you want, and then click the save button at the bottom right of the screen. The edited post will replace the original post on the feed."
      },
      {
        question: "How do I save posts?",
        answer: "To save a post, click the  icon located at the top right of the post, then “Save Post”. You can easily access your saved posts from the journal tab."
      },
      {
        question: "Who can see my posts?",
        answer: "With public posts, everyone on muunifi can see and interact with what you’ve posted. Subscribers only posts are seen by those subscribed to you directly. To learn more about subscriptions, click here."
      },
      {
        question: "Where can I see my own posts?",
        answer: "Your posts are available to view at your profile page. Your posts will be shown as their own feed, with the most recent posts made at the top and the oldest at the bottom."
      },
      {
        question: "What are tags?",
        answer: "Tags are general labels added to posts that can help categorize them for other users. You can sort by tag on the discover page to find posts that contain information you’re looking for. Add tags to your own posts to help other users find your content."
      },
    ]
  },
  {
    title: "Users",
    list: [
      {
        question: "How do I see who is subscribed to me?",
        answer: "You can see who’s currently subscribed to you in your profile. Once there, clicking “Subscribers” will show the users subscribed to you, as well as who you’ve subscribed to."
      },
      {
        question: "How do I find my profile?",
        answer: "You can find your profile by clicking the menu icon on the bottom right side of the page, then “Profile”. Here, you can view your followers, following, and subscriptions. You can also edit your profile by clicking the icon on the top right side of your profile."
      },
      {
        question: "Are there limits around following and subscribing?",
        answer: "There are no limits to following or subscribing. Use these features as much as you want to keep up with all of your favorite creators."
      },
      {
        question: "Do I have to subscribe to users to use muunifi?",
        answer: "You do not have to subscribe to any users to use muunifi. You can still view public posts from all users for free."
      },
      {
        question: "How do I cancel a subscription?",
        answer: "If you made your subscription on iOS, you can learn more about canceling Apple subscriptions from <a href='https://support.apple.com/en-us/HT202039' target='blank'>their support page</a>. If you’ve subscribed from an android device, you’ll <a href='https://support.google.com/googleplay/answer/7018481?hl=en&co=GENIE.Platform%3DAndroid' target='blank'>cancel your subscription from the Google Play Store.</a>"
      },
    ]
  },
  {
    title: "Messaging",
    list: [
      {
        question: "How do I message other users?",
        answer: "To message other users, tap the messages icon in the top right of the screen. From here, you can reply to messages sent by other users, or start your own conversation with the pencil icon in the top right."
      },
      {
        question: "Who can I message? Who can message me?",
        answer: "To message a user on muunifi, you need to be following them. You can message anyone you currently follow, and you can receive messages from those following you."
      },
      {
        question: "What limitations does messaging have?",
        answer: "You can send up to 10 photos or one video per message, just like posting. There is no character limit to your messages, so type away!"
      },
      {
        question: "What’s the difference between replies and messages?",
        answer: "Replies are located directly under a post, and are shown as  responses to the post. These are public, and can be seen by all other users interacting with the post. Messages are private conversations between users, and can only be seen by those who were sent the message."
      },
    ]
  },
  {
    title: "Events",
    list: [
      {
        question: "What are events?",
        answer: "Events are a great way for users to meet up and discuss financial topics. Anyone can create an event, and events can be free or paid for other users to join. Events are hosted on external platforms using the link the event host provides. You can gain access to these links by joining the events on muunifi. 15 minutes before any event, the “Click to Join” button becomes available, which will take you to the location of the event."
      },
      {
        question: "How do I find events?",
        answer: "You can find the most popular events on your discover page. Click the events tab and look through the calendar to find events that suit your interests."
      },
      {
        question: "How do I create events?",
        answer: "Want to start your own event? Navigate to the calendar page located under the menu icon in the bottom left, and then click the event icon in the top right corner. Add the event name and description, as well as a date and time. You can also add a maximum number of attendees, a picture for the event, and a price for the event. Add tags to help other users find your event, and make sure to include a link for the location of the event. You can also repeat the event daily, weekly, or monthly. Once you’re done, click the create button and the event will be available  to the public."
      },
    ]
  },
  {
    title: "Portfolios",
    list: [
      {
        question: "What is a portfolio?",
        answer: "A portfolio is a collection of financial investments like stocks and crypto. You can add information about your profile in muunifi to track its progress. To create a portfolio, click the menu icon, then ”Portfolio”. Click the “Create New Portfolio” button to get started. You can add a name, change the color scheme, and decide whether you would like it to be private or public. Once you’ve customized the portfolio to your liking, add investments to it under “Holdings” by clicking the “Add New Holding” button. Use the search bar to find investments, then add in the volume of the holding you’ve purchased and the date. Once your portfolio is up to date, click save."
      },
      {
        question: "Can other users see my portfolio?",
        answer: "If a portfolio is public, other users will be able to see your investment progress in your profile. If it’s private, you’ll be the only one able to see the portfolio."
      },
    ]
  },
  {
    title: "Community guidelines",
    list: [
      {
        question: "How do I report spam?",
        answer: "If you believe a post is spam, you can report it by tapping the three circles icon and then clicking “Report Post”. This will remove the post from your feed and send the information to muunifi."
      },
      {
        question: "How do I report inappropriate behavior?",
        answer: "If you come across a user disregarding community guidelines, you can report them from their profile by clicking the three circles icon. You can choose to block the user, which will take their posts off your feed and prevent them from messaging you or viewing your profile. You can also report the user to send their information to muunifi."
      },
      {
        question: "How do I block/mute other users?",
        answer: "If you’d like to stop viewing another users content, you can mute them from their profile by clicking the icon, then mute profile. This will prevent the user’s posts from popping up on your feed. You can also block a user from the same menu, which will both mute their posts and prevent them from seeing yours. If the user is not following Community Guidelines, learn more about reporting them here."
      },
      {
        question: "What are the muunifi community standards?",
        answer: "Start community guidelines"
      },
      {
        question: "What are the muunifi terms of service?",
        answer: "Lorem"
      },
      {
        question: "Where can I submit complaints about copyright, impersonation, trademark or other terms of service?",
        answer: "If you run into any issues on the app or have complaints about these topics, email <a href='mailto:support@muunifi.com'>support@muunifi.com</a> to get in contact with muunifi developers."
      },
    ]
  },
  {
    title: "Account Creation",
    list: [
      {
        question: "How do I create an account?",
        answer: "To create an account with muunifi, visit muunifi.com or download the muunifi app from the Apple App Store or Google Play store.  When you first open muunifi, you will be given two options: sign up and sign in. Click the sign up tab and enter your email to get to the next steps. You’ll be prompted to create a muunifi username, which must be different from all existing usernames on the app. Valid usernames must be longer than 3 characters, and can consist of numbers, letters, periods, and underscores. A username can not include periods or other special characters.  Once your username is verified, you can personalize your profile. First, choose your profile picture. Other users will see your photo, so make sure it follows our Community Guidelines. Next, you can add your name, title, location, and birthday to your profile. Location and birthday are private, but your name and title will show up on your profile. Add a secure password to your profile, and make sure it’s longer than 8 characters and includes one capital letter, one symbol, and one number. After you’ve made your password and accepted all terms and conditions, an email will be sent to you to finalize your account. You’ll be verified as soon as you click the link in the email sent. Return to muunifi to log in to your newly created account."
      },
      {
        question: "Why do I need a referral code?",
        answer: "You can get a referral code from any current user on muunifi. Every user receives a unique code that they are able to share in an unlimited quantity."
      },
      {
        question: "Where can I get a referral code to join muunifi?",
        answer: "You can get a referral code from any current user on muunifi. Every user receives a unique code that they are able to share in an unlimited quantity."
      },
    ]
  },
  {
    title: "Login",
    list: [
      {
        question: "I forgot my password. How can I reset it?",
        answer: "Can’t remember your password? You can reset it from login by clicking the help button in the password text box. Use your email that you created the account with, then click “Send Me My Link”. You’ll be sent an email that contains the link to reset your password. Enter your new password, then return to muunifi to log back into your account."
      },
      {
        question: "I’m locked out of my account. How can I get back in?",
        answer: "If you’re locked out of your account, make sure you still have access to your email and follow the steps to reset your password shown above."
      },
    ]
  },
  {
    title: "Payments",
    list: [
      {
        question: "What are the costs associated with muunifi?",
        answer: "Muunifi is a free app, and no purchases are necessary to post or view other public posts. However, users can support creators by subscribing to them for access to their “Subscribers Only” content. To learn more about subscription content, click here. Users can also create paid events that are only accessible to those who pay to attend. Read more about events here."
      },
      {
        question: "Can I trade stocks in muunifi?",
        answer: "You can’t trade stocks directly in muunifi, but you can use the watchlist to see the progress of potential investments. To add stocks to your watchlist, click the menu icon, then “Watchlist”. Here, you can search for stocks/crypto and add them to your watchlist. By clicking on the investment, you’ll be able to see statistics related to the stock’s performance, and can add it directly to a portfolio with the “Add to Portfolio” button if you decide to invest."
      },
    ]
  },
  {
    title: "Creator questions",
    list: [
      {
        question: "How do I create an account for subscription content?",
        answer: "Any user can start creating subscription content easily from their profile. Click on the top right side of your profile, and then click “Edit Profile”. You can create subscription plans or edit previous plans by pressing the button located in the “My Subscriptions'' section. Write a description of your content and set the price users will pay per month for these posts. You can also include a promo code that gives subscribers a free month trial of your subscribers only content. Once you’re done customizing, click save and start sharing your best content. Make sure posts meant for subscribers are set to “Subscribers Only” when you post."
      },
      {
        question: "How do I attract subscribers?",
        answer: "If users like your public posts, or you’ve amassed a large group of followers, you are more likely to attract subscribers. You can also give users a sample of your content by sending them your promo code for a month free, which may make them more likely to continue subscribing in the future."
      },
      {
        question: "How do I receive funds?",
        answer: "You’ll receive funds from subscriptions through your Stripe Dashboard. If you don’t currently have a Stripe account, you’ll need to <a href='https://dashboard.stripe.com/register' target='blank'>set one up</a> in order to receive funds."
      },
      {
        question: "When will I receive funds?",
        answer: "Funds take a while to process, but you can expect money from the subscriptions to be transferred to your Stripe Dashboard 2-3 months after the user has subscribed."
      },
      {
        question: "How do I optimize revenue?",
        answer: "In order to attract users to your content, make sure to keep users engaged. Post on your public feed to give users a sample of your content, and post regularly so that users stay subscribed to keep up with your updates. Make sure the content is educational and informational, and even try using polls or direct questions at your subscriber base to keep them engaged and build a community."
      }
    ]
  }
]

const FaqViewer = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [open, setOpen] = useState(list.map((item, i) => false))

  useEffect(() => {
    setTimeout(() => {
      setPlaySplitting(true)
    }, 500)

    setTimeout(() => {
      setPlay(true)
    }, 1000)
  }, [])

  const isMob = () => {
    return window.innerWidth < 880;
  }

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>Faq</div>
            </h1>
            <div className={`${play ? 'play' : ''} pb-5`}>
              {list.map((sect, i) => (
                <div key={`ss-${i}`}>
                  <h2 className={`${styles.faqHeading} entry-d-${i + 1}`}>{sect.title}</h2>
                  {sect?.list?.map((item, i) => (
                    <div className={`${styles.row} entry-d-${i + 1} ${open == item.question && item.answer ? "active" : ""}`} key={`ai-${i}`}>
                      <div className={`${styles.header}`} onClick={() => { setOpen(item.question == open ? "" : item.question); }}>
                        {item.question} <div className={`${styles.icon} ${open == item.question ? 'active' : ''}`}><IconChevronDown /></div>
                      </div>
                      {item.answer && <Collapse in={open == item.question}>
                        <div className={`${styles.inner}`}>
                          <div dangerouslySetInnerHTML={{ __html: item.answer }}>

                          </div>
                        </div>
                      </Collapse>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FaqViewer;