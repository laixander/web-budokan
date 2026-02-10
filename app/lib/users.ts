export const INITIAL_USERS = [
    {
        id: "student-1",
        name: "Daniel LaRusso",
        email: "student@budokhan.com",
        role: "user",
        createdAt: "2023-10-01T10:00:00Z",
        phone: "555-0199",
        birthDate: "1966-12-18",
        address: "123 Reseda Blvd, Los Angeles, CA",
        planId: "plan-intermediate",
        status: "active",
        planHistory: [
            {
                id: "ph-1",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2023-10-01T10:00:00Z",
                endDate: "2023-12-01T10:00:00Z"
            },
            {
                id: "ph-2",
                planId: "plan-intermediate",
                planName: "Intermediate",
                startDate: "2023-12-01T10:00:00Z"
            }
        ]
    },
    {
        id: "student-2",
        name: "Johnny Lawrence",
        email: "johnny@cobrakai.com",
        role: "user",
        createdAt: "2023-10-02T11:00:00Z",
        phone: "555-0123",
        birthDate: "1967-08-20",
        address: "456 Ventura Blvd, Encino, CA",
        planId: "plan-advanced",
        status: "active",
        planHistory: [
            {
                id: "ph-2b",
                planId: "plan-intermediate",
                planName: "Intermediate",
                startDate: "2023-10-02T11:00:00Z",
                endDate: "2024-01-01T10:00:00Z"
            },
            {
                id: "ph-3",
                planId: "plan-advanced",
                planName: "Advanced",
                startDate: "2024-01-01T10:00:00Z"
            }
        ]
    },
    {
        id: "student-3",
        name: "Miguel Diaz",
        email: "miguel@eaglefang.com",
        role: "user",
        createdAt: "2023-11-15T09:00:00Z",
        phone: "555-0456",
        birthDate: "2002-06-12",
        address: "789 Riverside Dr, Reseda, CA",
        planId: "plan-beginner",
        status: "active",
        planHistory: [
             {
                id: "ph-4",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2023-11-15T09:00:00Z"
            }
        ]
    },
    {
        id: "student-4",
        name: "Robby Keene",
        email: "robby@miyagido.com",
        role: "user",
        createdAt: "2023-09-10T14:00:00Z",
        phone: "555-0789",
        birthDate: "2002-02-04",
        address: "321 North Hollywood, CA",
        planId: "plan-intermediate",
        status: "active",
        planHistory: [
             {
                id: "ph-5a",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2023-09-10T14:00:00Z",
                endDate: "2024-01-10T14:00:00Z"
             },
             {
                id: "ph-5",
                planId: "plan-intermediate",
                planName: "Intermediate",
                startDate: "2024-01-10T14:00:00Z"
            }
        ]
    },
    {
        id: "student-5",
        name: "Chozen Toguchi",
        email: "chozen@okinawa.com",
        role: "user",
        createdAt: "2024-02-14T12:00:00Z",
        phone: "555-0678",
        birthDate: "1965-03-05",
        address: "12 Okinawa Rd, Okinawa, JP",
        planId: "plan-advanced",
        status: "active",
        planHistory: [
            {
                id: "ph-6",
                planId: "plan-intermediate",
                planName: "Intermediate",
                startDate: "2024-02-14T12:00:00Z",
                endDate: "2024-06-14T12:00:00Z"
            },
            {
                id: "ph-7",
                planId: "plan-advanced",
                planName: "Advanced",
                startDate: "2024-06-14T12:00:00Z"
            }
        ]
    },
    {
        id: "student-6",
        name: "Demetri",
        email: "demetri@dojo.com",
        role: "user",
        createdAt: "2024-03-01T09:30:00Z",
        phone: "555-0999",
        birthDate: "1998-07-21",
        address: "88 Main St, Reseda, CA",
        planId: "plan-beginner",
        status: "active",
        planHistory: [
            {
                id: "ph-8",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2024-03-01T09:30:00Z"
            }
        ]
    },
    {
        id: "student-7",
        name: "Tory Nichols",
        email: "tory@local.com",
        role: "user",
        createdAt: "2024-04-10T15:45:00Z",
        phone: "555-0333",
        birthDate: "1995-11-02",
        address: "200 Studio Ln, Los Angeles, CA",
        planId: "plan-intermediate",
        status: "active",
        planHistory: [
            {
                id: "ph-9",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2024-01-10T10:00:00Z",
                endDate: "2024-04-10T15:45:00Z"
            },
            {
                id: "ph-10",
                planId: "plan-intermediate",
                planName: "Intermediate",
                startDate: "2024-04-10T15:45:00Z"
            }
        ]
    },
    {
        id: "student-8",
        name: "Kumiko Aoki",
        email: "kumiko@dojo.jp",
        role: "user",
        createdAt: "2024-05-05T08:20:00Z",
        phone: "555-0444",
        birthDate: "2000-05-30",
        address: "5 Cherry Blossom Way, Tokyo, JP",
        planId: "plan-beginner",
        status: "active",
        planHistory: [
            {
                id: "ph-11",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2024-05-05T08:20:00Z"
            }
        ]
    },
    {
        id: "student-9",
        name: "Sasha Mitchell",
        email: "sasha@budokhan.com",
        role: "user",
        createdAt: "2024-06-01T10:15:00Z",
        phone: "555-0211",
        birthDate: "1990-01-15",
        address: "14 Willow St, Los Angeles, CA",
        planId: "plan-beginner",
        status: "inactive",
        planHistory: [
            {
                id: "ph-12",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2024-06-01T10:15:00Z",
                endDate: "2024-09-01T10:15:00Z"
            }
        ]
    },
    {
        id: "student-10",
        name: "Aisha Khan",
        email: "aisha@budokhan.com",
        role: "user",
        createdAt: "2024-07-15T08:00:00Z",
        phone: "555-0555",
        birthDate: "1997-04-22",
        address: "99 Maple Ave, Reseda, CA",
        planId: "plan-intermediate",
        status: "inactive",
        planHistory: [
            {
                id: "ph-13",
                planId: "plan-beginner",
                planName: "Beginner",
                startDate: "2024-03-01T09:00:00Z",
                endDate: "2024-07-15T08:00:00Z"
            }
        ]
    },
    {
        id: "admin-1",
        name: "Sensei Admin",
        email: "admin@budokhan.com",
        role: "admin",
        createdAt: "2023-01-01T08:00:00Z"
    }
];


export type User = typeof INITIAL_USERS[number];
