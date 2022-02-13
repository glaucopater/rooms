# rooms

Book and checking out spaces.

Abstract
---
An user afer registration can book a space in the office according to the calendar and capacity.
When a spot is booked there is a limited time to check in.
The max size of the office is set and can be changed weekly.
A waiting list with a max size is available. If someone cancel the booking the spot is available again and the calendar is updated. Same for the waiting list.
A rating system for booking is available. It monitors how much people book, cancel but also don't check in on time.
If an user is not providing a valid reason within 24h for not being in the office he/she receives a negative rating
If a user belongs to a team and multiple users are booked at the same time the team gets a team rating.
Otherwise the user is assigned to the first available spot closest to another user, this to keep a clustering of users.
The system tries to cluster each team.
User with a certain rating are allowed to book their favorite spot.

Heating and lighting are optimized for the office. This is why an area is pre-heated or pre-ventilated according to the calendar and to the capacity for each area.

The minimum time for a user is 4 hours.


UI
- Login Form
- Registration Form
- Calendar
- Booking Form
- Waiting List

For admin
- Add new space
- Add new user
- Add new calendar
- Add new booking
- create team
- manage team
- Manage holidays
- Rating

define a map

define areas of the map
- floor
- room
- desk
- meeting room

Users
- register user
- unregister user
- checkin
- checkout
- guest
- booking a spot
- booking a meeting room


Calendar

TODO
---
- define models on db


Tools
- random map generator