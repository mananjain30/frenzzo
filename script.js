// Product data
const products = [
    {
        id: 1,
        name: "Neck Rest",
        category: "comfort",
        tagline: "Ultimate support for your neck(set of 2)",
        price: "₹1,199",
        originalPrice: "₹1,499",
        discount: 20,
        rating: 4.5,
        reviewCount: 128,
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK1.png",
        description: "Experience ultimate comfort with our premium neck rest, designed to provide perfect support for your neck during travel or relaxation. The ergonomic design helps reduce neck strain and improve posture.",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK1.png",
                    "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK2.png",
                    "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK3.png",
                    "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK4.png",
                    "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Neck_Rest/NRBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Neck_Rest/NRBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Neck_Rest/NRBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Neck_Rest/NRBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Neck_Rest/NRBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Neck_Rest/NRBEIGE5.png"


                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Neck_Rest/NRTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Neck_Rest/NRTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Neck_Rest/NRTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Neck_Rest/NRTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Neck_Rest/NRTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Neck_Rest/NRTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Neck_Rest/NRCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Neck_Rest/NRCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Neck_Rest/NRCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Neck_Rest/NRCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Neck_Rest/NRCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Neck_Rest/NRCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Grey_Neck_Rest/NRGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Grey_Neck_Rest/NRGREY1.png",
                    "images/Grey_Jainex_Amazon/Grey_Neck_Rest/NRGREY2.png",
                    "images/Grey_Jainex_Amazon/Grey_Neck_Rest/NRGREY3.png",
                    "images/Grey_Jainex_Amazon/Grey_Neck_Rest/NRGREY4.png",
                    "images/Grey_Jainex_Amazon/Grey_Neck_Rest/NRGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Car_Neck_Rest/NRBLACK1.png",
        description: "Experience ultimate comfort with our premium neck rest, designed to provide perfect support for your neck during travel or relaxation.",
        features: [
            "Ergonomic Design: Reduces strain on the neck and shoulders, promoting healthy posture.",
            "Premium Memory Foam: High-density foam that adapts to your shape, offering personalized support and durability.",
            "Shape & Design : the bow-shaped neck rest enhances the interior of the car and adds a unique look to the car seat. ",
            "Breathable Washable Cover: Keeps you cool and is easy to clean, maintaining a fresh look and feel.",
            "Universal Fit: Adjustable strap with buckle ensures compatibility with all car seats, SUVs, and office chairs.",
            "Lightweight & Portable: Perfect for use in cars, at home, or in the office."

        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": " L 28 cm x W 5.5 cm x H 17 cm (11 x 2 x 6.5 inches)",
            "Weight": "410g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Alex T.",
                rating: 5,
                comment: "Incredibly comfortable, helps with my neck pain during long flights!"
            },
            {
                author: "Priya M.",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 2,
        name: "Lumbar Support",
        category: "comfort",
        tagline: "Ultimate support for your back",
        price: "₹1,499",
        originalPrice: "₹1,999",
        discount: 25,
        rating: 4.7,
        reviewCount: 215,
        description: "Improve your sitting posture and reduce back pain with our ergonomic lumbar support cushion. Designed to fit perfectly in office chairs, car seats, and more.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK1.png",
                    "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK2.png",
                    "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK3.png",
                    "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK4.png",
                    "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Lumbor_Support/LSBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Lumbor_Support/LSBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Lumbor_Support/LSBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Lumbor_Support/LSBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Lumbor_Support/LSBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Lumbar_Support/LSBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Lumbar_Support/LSTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Lumbar_Support/LSTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Lumbar_Support/LSTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Lumbar_Support/LSTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Lumbar_Support/LSTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Lumbar_Support/LSTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Lumbor_Support/LSCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Lumbor_Support/LSCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Lumbor_Support/LSCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Lumbor_Support/LSCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Lumbor_Support/LSCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Lumbor_Support/LSCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Lumbar_Support/LSGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Lumbar_Support/LSGREY1.png",
                    "images/Grey_Jainex_Amazon/Lumbar_Support/LSGREY2.png",
                    "images/Grey_Jainex_Amazon/Lumbar_Support/LSGREY3.png",
                    "images/Grey_Jainex_Amazon/Lumbar_Support/LSGREY4.png",
                    "images/Grey_Jainex_Amazon/Lumbar_Support/LSGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Lumbar_Support/LSBLACK1.png",
        description: "Experience ultimate comfort with our premium lumbar support, designed to provide perfect support for your back and lumbar area during travel, office or relaxation.",
        features: [
            "Ergonomic Back Support: Relieves pressure on the lumbar region, promoting a healthy posture.",
            "High-Quality Memory Foam: Adapts to your shape for custom comfort and maintains its structure over time.",
            "Shape & Design : Its unique shape makes it perfect for back support and its design makes it most comfortable in the segment.",
            "Breathable Washable Cover: Keeps the cushion fresh and easy to clean.",
            "Adjustable Strap: Ensures a secure fit for car seats, office chairs, and more",
            "Lightweight & Versatile: Ideal for cars, homes, offices, and travel."
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 46 cm x W 11.5 cm x H 40 cm (18 x 4.5 x 15.5 inches)",
            "Weight": "595g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "George",
                rating: 5,
                comment: "Incredibly comfortable, helps with my back pain during long drives!"
            },
            {
                author: "Priya M.",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 3,
        name: "Travel Pillow",
        category: "comfort",
        tagline: "Ultimate support for your neck",
        price: "₹999",
        originalPrice: "₹1,299",
        discount: 23,
        rating: 4.3,
        reviewCount: 178,
        description: "Make your travels more comfortable with our memory foam travel pillow. Provides excellent neck support whether you're on a plane, train, or car ride.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK1.png",
                    "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK2.png",
                    "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK3.png",
                    "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK4.png",
                    "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Travel_Neck_Pillow/TCBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Travel_Neck_Pillow/TCBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Travel_Neck_Pillow/TCBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Travel_Neck_Pillow/TCBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Travel_Neck_Pillow/TCBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Travel_Neck_Pillow/TCBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Travel_Neck_Pillow/TCTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Travel_Neck_Pillow/TCTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Travel_Neck_Pillow/TCTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Travel_Neck_Pillow/TCTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Travel_Neck_Pillow/TCTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Travel_Neck_Pillow/TCTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Travel_Neck_Pillow/TCCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Travel_Neck_Pillow/TCCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Travel_Neck_Pillow/TCCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Travel_Neck_Pillow/TCCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Travel_Neck_Pillow/TCCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Travel_Neck_Pillow/TCCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Travel_Neck_Pillow/TCGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Travel_Neck_Pillow/TCGREY1.png",
                    "images/Grey_Jainex_Amazon/Travel_Neck_Pillow/TCGREY2.png",
                    "images/Grey_Jainex_Amazon/Travel_Neck_Pillow/TCGREY3.png",
                    "images/Grey_Jainex_Amazon/Travel_Neck_Pillow/TCGREY4.png",
                    "images/Grey_Jainex_Amazon/Travel_Neck_Pillow/TCGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Travel_Neck_Pillow/TCBLACK1.png",
        description: "Experience ultimate comfort with our premium travel neck pillow, designed to provide perfect support for your neck during travel or relaxation.",
        features: [
            "Ergonomic Support: Alleviates neck and shoulder tension with its contoured design.",
            "Premium Memory Foam: Adapts to your shape for personalized comfort and excellent durability.",
            "Shape & Design  : Its unique shape makes it most compatible to ensure comfort on its use.",
            "Breathable Washable Cover: Keeps the pillow clean and fresh with minimal effort.",
            "Compact & Lightweight: Easy to carry and store in your luggage or bag",
            "Versatile: Ideal for cars, homes, offices, and travel."
        ],
        specifications: {
            "Material": "High-quality memory foam",
            "Dimensions": "L 28 cm x W 30.5 cm x H 28 cm (11 x 12 x 11 inches)",
            "Weight": "295g",
            "Cover": "Soft, breathable fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Ben",
                rating: 5,
                comment: "Incredibly comfortable, helps with my neck pain during long flights!"
            },
            {
                author: "Alex",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 4,
        name: "Armrest",
        category: "comfort",
        tagline: "Ultimate support for your arms and shoulders",
        price: "₹1,299",
        originalPrice: "₹1,699",
        discount: 24,
        rating: 4.2,
        reviewCount: 92,
        description: "Enhance your seating comfort with our ergonomic armrest cushion. Perfect for office chairs, car seats, or any chair that needs extra arm support.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Armrest/ARBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Armrest/ARBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Armrest/ARBLACK1.png",
                    "images/Black_Jainex_Raw/Armrest/ARBLACK2.png",
                    "images/Black_Jainex_Raw/Armrest/ARBLACK3.png",
                    "images/Black_Jainex_Raw/Armrest/ARBLACK4.png",
                    "images/Black_Jainex_Raw/Armrest/ARBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Armrest/ARBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Armrest/ARBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Armrest/ARBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Armrest/ARBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Armrest/ARBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Armrest/ARBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_ArmRest/ARTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_ArmRest/ARTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_ArmRest/ARTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_ArmRest/ARTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_ArmRest/ARTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_ArmRest/ARTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Armrest/ARCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Armrest/ARCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Armrest/ARCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Armrest/ARCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Armrest/ARCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Armrest/ARCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Armrest/ARGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Armrest/ARGREY1.png",
                    "images/Grey_Jainex_Amazon/Armrest/ARGREY2.png",
                    "images/Grey_Jainex_Amazon/Armrest/ARGREY3.png",
                    "images/Grey_Jainex_Amazon/Armrest/ARGREY4.png",
                    "images/Grey_Jainex_Amazon/Armrest/ARGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Armrest/ARBLACK1.png",
        description: "Experience ultimate comfort with our premium armrest, designed to provide perfect support for your elbow during travel or relaxation.",
        features: [
            "Ergonomic Design: Provides superior support for elbows and forearms, reducing strain during drives.",
            "High-Density Memory Foam: Adapts to your arm’s contours for personalized comfort and durability.",
            "Shape & Design : Its unique shape makes it most compatible to provide comfort to elbows and forearms. ",
            "Breathable Washable Cover: Keeps the armrest clean and fresh with minimal effort.",
            "Compact & Lightweight: Easy to carry and store in your luggage or bag",
            "Versatile: Ideal for cars, homes, offices, and travel."
        ],
        specifications: {
            "Material": "Memory Foam",
            "Dimensions": "L 30.5 cm x W 15.5 cm x H 11.5 cm (12 x 6 x 4.5 inches)",
            "Weight": "245g",
            "Cover": "Soft, breathable fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Alex T.",
                rating: 5,
                comment: "Incredibly comfortable, helps with my elbow pain during long drives!"
            },
            {
                author: "Priya M.",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 5,
        name: "Big Head Rest",
        category: "comfort",
        tagline: "Ultimate support for your head, neck and shoulders",
        price: "₹1,799",
        originalPrice: "₹2,299",
        discount: 22,
        rating: 4.6,
        reviewCount: 187,
        description: "Experience superior comfort with our large headrest cushion, designed to support your head, neck, and shoulders. Perfect for long drives, flights, or relaxing at home.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK1.png",
                    "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK2.png",
                    "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK3.png",
                    "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK4.png",
                    "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Big_Headrest/BHRBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Big_Headrest/BHRBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Big_Headrest/BHRBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Big_Headrest/BHRBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Big_Headrest/BHRBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Big_Headrest/BHRBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_BHR/BHRTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_BHR/BHRTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_BHR/BHRTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_BHR/BHRTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_BHR/BHRTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_BHR/BHRTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Big_Headrest/BHRCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Big_Headrest/BHRCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Big_Headrest/BHRCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Big_Headrest/BHRCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Big_Headrest/BHRCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Big_Headrest/BHRCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Big_Headrest/BHRGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Big_Headrest/BHRGREY1.png",
                    "images/Grey_Jainex_Amazon/Big_Headrest/BHRGREY2.png",
                    "images/Grey_Jainex_Amazon/Big_Headrest/BHRGREY3.png",
                    "images/Grey_Jainex_Amazon/Big_Headrest/BHRGREY4.png",
                    "images/Grey_Jainex_Amazon/Big_Headrest/BHRGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Big_Headrest/BHRBLACK1.png",
        description: "Experience ultimate comfort with our premium big headrest, designed to provide perfect support for your head and shoulders during travel or relaxation.",
        features: [
            "Superior Head Support: Ergonomically designed to reduce head and neck strain during long drives.",
            "High-Density Memory Foam: Provides customized comfort and excellent durability, molding to your head shape.",
            "Shape & Design : Its unique shape allows it to provide comfort to head, neck and shoulders(including upper back). This ensures that it performs 3 tasks at a time. Therefore, its also called 3-in-1 cushion.",
            "Breathable Washable Cover: Keeps the headrest clean and fresh with minimal effort.",
            "Compact & Lightweight: Easy to carry and store in your luggage or bag",
            "Versatile: Ideal for cars, homes, offices, and travel."
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 32 cm x W 11 cm x H 44 cm (12 x 4 x 17 inches)",
            "Weight": "615g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "George",
                rating: 5,
                comment: "Incredibly comfortable, helps with my neck pain during long drives!"
            },
            {
                author: "Priya M.",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 6,
        name: "Small Headrest",
        category: "comfort",
        tagline: "Ultimate support for your head and neck",
        price: "₹1,299",
        originalPrice: "₹1,699",
        discount: 24,
        rating: 4.4,
        reviewCount: 143,
        description: "Compact yet comfortable headrest cushion that provides excellent support for your head and neck. Perfect for travel, office use, or relaxing at home.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK1.png",
                    "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK2.png",
                    "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK3.png",
                    "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK4.png",
                    "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY1.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY2.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY3.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY4.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Small_Headrest/SHRBLACK1.png",
        description: "Experience ultimate comfort with our premium small headrest, designed to provide perfect support for your head and neck during travel or relaxation.",
        features: [
            "Superior Head Support: Ergonomically designed to reduce head and neck strain during long drives.",
            "High-Density Memory Foam: Provides customized comfort and excellent durability, molding to your head shape.",
            "Shape & Design : Its unique shape allows it to provide comfort to head, neck and shoulders(including upper back). This ensures that it performs 3 tasks at a time. Therefore, its also called 3-in-1 cushion.",
            "Breathable Washable Cover: Keeps the headrest clean and fresh with minimal effort.",
            "Compact & Lightweight: Easy to carry and store in your luggage or bag",
            "Versatile: Ideal for cars, homes, offices, and travel.",
            "Perfect for travel and home use"
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 25.5 cm x W 13 cm x H 30 cm (10 x 5 x 11.5 inches)",
            "Weight": "325g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Alex T.",
                rating: 5,
                comment: "Incredibly comfortable, helps with my neck pain during long drives!"
            },
            {
                author: "Benjamin",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 7,
        name: "Coccyx Seat Cushion",
        category: "comfort",
        tagline: "Ultimate support for your spine and coccyx",
        price: "₹1,899",
        originalPrice: "₹2,499",
        discount: 24,
        rating: 4.8,
        reviewCount: 231,
        description: "Relieve tailbone pain and improve sitting posture with our ergonomic coccyx seat cushion. Perfect for office chairs, car seats, or wheelchairs.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK1.png",
                    "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK2.png",
                    "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK3.png",
                    "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK4.png",
                    "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Small_Headrest/SHRBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Small_Head_Rest/SHRTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Small_Headrest/SHRCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY1.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY2.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY3.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY4.png",
                    "images/Grey_Jainex_Amazon/Small_Headrest/SHRGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK1.png",
        description: "Experience ultimate comfort with our premium coccyx seat cushion, designed to provide perfect support for your spine and coccyx during travel or relaxation.",
        features: [
            "Ergonomic Orthopedic Design: Reduces pressure on the tailbone and promotes healthy posture.",
            "High-Density Memory Foam: Provides customized comfort and excellent durability, molding to your spine shape.",
            "Breathable Washable Cover: Keeps the seat cushion clean and fresh with minimal effort.",
            "Compact & Lightweight: Easy to carry and store in your luggage or bag",
            "Versatile: Ideal for cars, homes, offices, and travel.",
            "Perfect for yoga,travel and home use"
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 46 cm x W 8 cm x H 33 cm (18 x 3 x 13 inches)",
            "Weight": "600g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Naman",
                rating: 5,
                comment: "Incredibly comfortable, helps with my spinal pain during long sitting hours!"
            },
            {
                author: "Jane Doe",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 8,
        name: "Cushion Kit",
        category: "comfort",
        tagline: "Ultimate support for your back(set of 2)",
        price: "₹2,999",
        originalPrice: "₹3,999",
        discount: 25,
        rating: 4.7,
        reviewCount: 198,
        description: "Complete comfort solution with our premium cushion kit. Includes two high-quality cushions designed to provide optimal support for your back and seat.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Coccyx_Seat_Cushion/CSBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK1.png",
                    "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK2.png",
                    "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK3.png",
                    "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK4.png",
                    "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Cushion_Kit/CKBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Cushion_Kit/CKBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Cushion_Kit/CKBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Cushion_Kit/CKBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Cushion_Kit/CKBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Cushion_Kit/CKBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Cushion_Kit/CKTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Cushion_Kit/CKTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Cushion_Kit/CKTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Cushion_Kit/CKTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Cushion_Kit/CKTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Cushion_Kit/CKTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Cushion_Kit/CKCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Cushion_Kit/CKCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Cushion_Kit/CKCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Cushion_Kit/CKCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Cushion_Kit/CKCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Cushion_Kit/CKCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Raw/Grey_Cushion_Kit/CKGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Cushion_Kit/CKGREY1.png",
                    "images/Grey_Jainex_Amazon/Cushion_Kit/CKGREY2.png",
                    "images/Grey_Jainex_Amazon/Cushion_Kit/CKGREY3.png",
                    "images/Grey_Jainex_Amazon/Cushion_Kit/CKGREY4.png",
                    "images/Grey_Jainex_Amazon/Cushion_Kit/CKGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Cushion_Kit/CKBLACK1.png",
        description: "Experience ultimate comfort with our premium cushion kit, designed to provide perfect support for your back during travel or relaxation.",
        features: [
            "Shape & Design  : Its unique shape makes it most compatible to ensure comfort on its use.",
            "Ergonomic Design: Relieves pressure on the back, neck, and tailbone, promoting healthy posture.",
            "Breathable Washable Cover: Keeps the cushion clean and fresh with minimal effort.",
            "Compact & Lightweight: Easy to carry and store in your luggage or bag",
            "Versatile: Ideal for cars, homes, offices, and travel."
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 36 cm x W 36 cm (14 x 14 inches)",
            "Weight": "940g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Alex T.",
                rating: 5,
                comment: "Incredibly comfortable, helps with my back pain during long sitting hours!"
            },
            {
                author: "Priya M.",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 9,
        name: "Curved Neck Rest",
        category: "comfort",
        tagline: "Ultimate support for your neck(set of 2)",
        price: "₹1,499",
        originalPrice: "₹1,999",
        discount: 25,
        rating: 4.5,
        reviewCount: 167,
        description: "Ergonomic curved neck rest designed to provide optimal support and comfort. The unique shape cradles your neck for maximum relaxation during travel or rest.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK1.png",
                    "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK2.png",
                    "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK3.png",
                    "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK4.png",
                    "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK5.png"
                ]
            },
            { 
                name: "Beige", 
                code: "#F5F5DC",
                image: "images/Beige_Jainex_Amazon/Beige_Curved_NeckRest/CNRBEIGE1.png",
                gallery: [
                    "images/Beige_Jainex_Amazon/Beige_Curved_NeckRest/CNRBEIGE1.png",
                    "images/Beige_Jainex_Amazon/Beige_Curved_NeckRest/CNRBEIGE2.png",
                    "images/Beige_Jainex_Amazon/Beige_Curved_NeckRest/CNRBEIGE3.png",
                    "images/Beige_Jainex_Amazon/Beige_Curved_NeckRest/CNRBEIGE4.png",
                    "images/Beige_Jainex_Amazon/Beige_Curved_NeckRest/CNRBEIGE5.png"
                ]
            },
            { 
                name: "Tan", 
                code: "#D2B48C",
                image: "images/Tan_Jainex_Amazon/Tan_Curved_Neck_Rest/CNRTAN1.png",
                gallery: [
                    "images/Tan_Jainex_Amazon/Tan_Curved_Neck_Rest/CNRTAN1.png",
                    "images/Tan_Jainex_Amazon/Tan_Curved_Neck_Rest/CNRTAN2.png",
                    "images/Tan_Jainex_Amazon/Tan_Curved_Neck_Rest/CNRTAN3.png",
                    "images/Tan_Jainex_Amazon/Tan_Curved_Neck_Rest/CNRTAN4.png",
                    "images/Tan_Jainex_Amazon/Tan_Curved_Neck_Rest/CNRTAN5.png"
                ]
            },
            { 
                name: "Coffee", 
                code: "#6F4E37",
                image: "images/Coffee_Jainex_Amazon/Coffee_Curved_NeckRest/CNRCOFF1.png",
                gallery: [
                    "images/Coffee_Jainex_Amazon/Coffee_Curved_NeckRest/CNRCOFF1.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Curved_NeckRest/CNRCOFF2.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Curved_NeckRest/CNRCOFF3.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Curved_NeckRest/CNRCOFF4.png",
                    "images/Coffee_Jainex_Amazon/Coffee_Curved_NeckRest/CNRCOFF5.png"
                ]
            },
            { 
                name: "Grey", 
                code: "#808080",
                image: "images/Grey_Jainex_Amazon/Curved_NeckRest/CNRGREY1.png",
                gallery: [
                    "images/Grey_Jainex_Amazon/Curved_Neck_Rest/CNRGREY1.png",
                    "images/Grey_Jainex_Amazon/Curved_Neck_Rest/CNRGREY2.png",
                    "images/Grey_Jainex_Amazon/Curved_Neck_Rest/CNRGREY3.png",
                    "images/Grey_Jainex_Amazon/Curved_Neck_Rest/CNRGREY4.png",
                    "images/Grey_Jainex_Amazon/Curved_Neck_Rest/CNRGREY5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Curved_Neck_Rest/CNRBLACK1.png",
        description: "Experience ultimate comfort with our premium curved neck rest, designed to provide perfect support for your neck during travel or relaxation.",
        features: [
            "Ergonomic Design: Reduces strain on the neck and shoulders, promoting healthy posture",
            "Premium Memory Foam: High-density foam that adapts to your shape, offering personalized support and durability.",
            "Shape & Design : the bow-shaped neck rest enhances the interior of the car and adds a unique look to the car seat. ",
            "Breathable Washable Cover: Keeps you cool and is easy to clean, maintaining a fresh look and feel.",
            "Universal Fit: Adjustable strap with buckle ensures compatibility with all car seats, SUVs, and office chairs.",
            "Lightweight & Portable: Perfect for use in cars, at home, or in the office."
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 32 cm x W 13 cm x H 17 cm (12.5 x 5 x 6.5 inches)",
            "Weight": "710g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Jack",
                rating: 5,
                comment: "Incredibly comfortable, helps with my neck pain during long flights!"
            },
            {
                author: "Phil",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 10,
        name: "Curved Lumbar Support",
        category: "comfort",
        tagline: "Ultimate support for your back",
        price: "₹1,699",
        originalPrice: "₹2,199",
        discount: 23,
        rating: 4.6,
        reviewCount: 189,
        description: "Experience superior lumbar support with our ergonomically designed curved cushion. Helps maintain proper spinal alignment and reduces back pain during long hours of sitting.",
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Curved_Lumbar_Support/CLSBLACK1.png",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Curved_Lumbar_Support/CLSBLACK1.png",
                gallery: [
                    "images/Curved_Lumbar_Support/CLS1.png",
                    "images/Curved_Lumbar_Support/CLS2.png",
                    "images/Curved_Lumbar_Support/CLS3.png",
                    "images/Curved_Lumbar_Support/CLS4.png",
                    "images/Curved_Lumbar_Support/CLS5.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Curved_Lumbar_Support/CLS1.png",
        description: "Experience ultimate comfort with our premium curved lumbar support, designed to provide perfect support for your back during travel or relaxation.",
        features: [
            "Ergonomic Back Support: Relieves pressure on the lumbar region, promoting a healthy posture.",
            "High-Quality Memory Foam: Adapts to your shape for custom comfort and maintains its structure over time.",
            "Shape & Design : The bow-shaped lumbar support enhances the interior of the car and adds a unique look to the car seat.",
            "Breathable Washable Cover: Keeps the cushion fresh and easy to clean.",
            "Adjustable Strap: Ensures a secure fit for car seats, office chairs, and more.",
            "Lightweight & Versatile: Ideal for cars, homes, offices, and travel."
        ],
        specifications: {
            "Material": "Premium-grade memory foam",
            "Dimensions": "L 46 cm x W 11.5 cm x H 40 cm (18 x 4.5 x 15.5 inches)",
            "Weight": "595g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Alex T.",
                rating: 5,
                comment: "Incredibly comfortable, helps with my back pain during long sitting hours!"
            },
            {
                author: "George",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    },
    {
        id: 11,
        name: "Fibre Neck Rest",
        category: "comfort",
        tagline: "Ultimate support for your neck(set of 2)",
        price: "₹1,099",
        originalPrice: "₹1,499",
        discount: 27,
        rating: 4.6,
        reviewCount: 198,
        // Default to first color's image
        image: "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK1.png",
        description: "Experience ultimate comfort with our premium fibre neck rest, designed to provide perfect support for your neck during travel or relaxation. The ergonomic design helps reduce neck strain and improve posture.",
        // Color-specific images
        colors: [
            { 
                name: "Black", 
                code: "#000000",
                image: "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK1.png",
                gallery: [
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK1.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK2.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK3.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK4.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK5.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK6.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK7.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK8.png",
                    "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK9.png"
                ]
            }
        ],
        // Set main image to first color's image
        image: "images/Black_Jainex_Raw/Fibre_Neck_Rest_Full_Black_With_Thick_Black_Area/FNRBLACK1.png",
        description: "Experience ultimate comfort with our premium fibre neck rest, designed to provide perfect support for your neck during travel or relaxation. The ergonomic design helps reduce neck strain and improve posture.",
        features: [
            "Ergonomic Design: Reduces strain on the neck and shoulders, promoting healthy posture.",
            "Premium Fibre: High-density fibre that adapts to your shape, offering personalized support and durability.",
            "Shape & Design: The bow-shaped neck rest enhances the interior of the car and adds a unique look to the car seat.",
            "Breathable Washable Cover: Keeps you cool and is easy to clean, maintaining a fresh look and feel.",
            "Universal Fit: Adjustable strap with buckle ensures compatibility with all car seats, SUVs, and office chairs.",
            "Lightweight & Portable: Perfect for travel, at home, or in the office."
        ],
        specifications: {
            "Material": "Premium fibre",
            "Dimensions": "L 24 cm x H 18 cm (9.5 x 7 inches)",
            "Weight": "340g",
            "Cover": "Breathable mesh fabric (removable and machine washable)",
            "Compatibility": "Fits most car seats, office chairs, and recliners"
        },
        reviews: [
            {
                author: "Alex T.",
                rating: 5,
                comment: "Incredibly comfortable, helps with my neck pain during long flights!"
            },
            {
                author: "Priya M.",
                rating: 4,
                comment: "Great support, love the different color options."
            }
        ]
    }
];

let currentSlide = 0;
let slideInterval;
let currentFilter = 'all';

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

// Setup modal event listeners
function setupModalEventListeners(modal, product) {
    // Close modal when clicking the close button
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeProductModal();
        });
    }

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function handleEscape(e) {
        if (e.key === 'Escape') {
            closeProductModal();
            // Remove this event listener when modal is closed
            document.removeEventListener('keydown', handleEscape);
        }
    });

    // Handle tab switching
    const tabButtons = modal.querySelectorAll('.tab-btn');
    const tabPanels = modal.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding tab panel
            tabPanels.forEach(panel => {
                if (panel.id === `${tabId}-tab`) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // Handle color swatch selection
    const colorSwatches = modal.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            e.stopPropagation();
            // Remove active class from all swatches
            colorSwatches.forEach(s => s.classList.remove('active'));
            // Add active class to clicked swatch
            swatch.classList.add('active');
            // Here you can update the main product image based on color if needed
        });
    });

    // Handle quantity selector
    const quantityInput = modal.querySelector('.quantity-input');
    const minusBtn = modal.querySelector('.quantity-btn.minus');
    const plusBtn = modal.querySelector('.quantity-btn.plus');

    if (minusBtn && plusBtn && quantityInput) {
        minusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });
    }

    // Handle thumbnail clicks
    const thumbnails = modal.querySelectorAll('.thumbnail');
    const mainImage = modal.querySelector('.main-product-image');
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Update main image source
                mainImage.src = thumb.src;
                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }

    // Add to cart functionality
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value) || 1;
            const selectedColor = modal.querySelector('.color-swatch.active')?.dataset.color || 'default';
            
            // Here you would typically add the product to the cart
            console.log(`Added to cart: ${product.name}, Quantity: ${quantity}, Color: ${selectedColor}`);
            
            // Show success message or update cart count
            alert(`${product.name} has been added to your cart!`);
            
            // Close modal after adding to cart
            closeProductModal();
        });
    }
}

// Carousel functionality - Using enhanced implementation below
// Removed duplicate function to fix JavaScript error

// Product functionality
function loadProducts() {
    console.log('loadProducts function called');
    console.log('Document readyState:', document.readyState);
    console.log('Document body:', document.body ? 'exists' : 'does not exist');
    
    // Try to find the container multiple ways
    let productsContainer = document.getElementById('productsContainer');
    
    if (!productsContainer) {
        console.warn('productsContainer not found by ID, trying querySelector...');
        productsContainer = document.querySelector('#productsContainer');
    }
    
    // If still not found, try to create it
    if (!productsContainer) {
        console.warn('productsContainer not found, attempting to create it...');
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            console.log('Found products section, creating container...');
            productsContainer = document.createElement('div');
            productsContainer.id = 'productsContainer';
            productsContainer.className = 'products-grid';
            productsSection.appendChild(productsContainer);
            console.log('Created productsContainer:', productsContainer);
        } else {
            console.error('Could not find products section to append container to');
            return;
        }
    }
    
    console.log('Using products container:', productsContainer);
    
    console.log('Products container found:', productsContainer);
    console.log('Container parent:', productsContainer.parentElement);

    // Ensure container is visible and has proper styling
    productsContainer.style.display = 'grid';
    productsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    productsContainer.style.gap = '25px';
    productsContainer.style.width = '100%';
    productsContainer.style.padding = '20px 0';
    
    // Clear loading state if any
    productsContainer.innerHTML = '';

    // Show loading state
    productsContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>Loading products...</p></div>';
    console.log('Loading state shown');

    // Simulate API call delay
    setTimeout(() => {
        console.log('Processing products...');
        // Clear loading state
        productsContainer.innerHTML = '';

        // Log all products for debugging
        console.log('All products:', products);
        
        // Filter products to only include those with complete data
        const validProducts = [];
        const invalidProducts = [];
        
        products.forEach(product => {
            const requiredFields = ['name', 'price', 'image', 'description'];
            const missingFields = requiredFields.filter(field => !product[field]);
            
            if (missingFields.length === 0) {
                validProducts.push(product);
            } else {
                console.warn(`Product ID ${product.id} (${product.name || 'Unnamed'}) is missing required fields:`, missingFields);
                invalidProducts.push({
                    id: product.id,
                    name: product.name || 'Unnamed',
                    missingFields: missingFields
                });
            }
        });

        console.log(`Found ${validProducts.length} valid products and ${invalidProducts.length} invalid products out of ${products.length}`);
        
        if (invalidProducts.length > 0) {
            console.warn('Invalid products:', invalidProducts);
        }

        if (validProducts.length === 0) {
            const errorMessage = 'No valid products found. Please check the console for details.';
            console.error(errorMessage);
            productsContainer.innerHTML = `
                <div class="error-message" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                    <p style="color: #ef4444; font-weight: 500;">${errorMessage}</p>
                    <p>Check the browser console for more information about missing product data.</p>
                </div>
            `;
            return;
        }

        // Create product cards
        validProducts.forEach((product, index) => {
            console.log(`Creating card for product ${index + 1}:`, product.name);
            try {
                const productCard = createProductCard(product);
                if (productCard) {
                    productsContainer.appendChild(productCard);
                    console.log(`Card created for: ${product.name}`);
                } else {
                    console.error('Failed to create card for product:', product.name);
                }
            } catch (error) {
                console.error(`Error creating card for ${product.name}:`, error);
            }
        });

        console.log('Initializing event listeners...');
        // Initialize event listeners
        try {
            setupEventListeners();
            console.log('Event listeners initialized');
        } catch (error) {
            console.error('Error initializing event listeners:', error);
        }
    }, 800);
}

// Standard color options for all products
const standardColors = [
    { 
        name: "Black", 
        code: "#000000",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1582719471384-894e8263e561?w=800&h=600&fit=crop"
        ]
    },
    { 
        name: "Beige", 
        code: "#F5F5DC",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&ixlib=rb-1.2.1"
        ]
    },
    { 
        name: "Tan", 
        code: "#D2B48C",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop&ixlib=rb-1.2.1"
        ]
    },
    { 
        name: "Coffee", 
        code: "#6F4E37",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&grayscale",
        gallery: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&grayscale",
            "https://images.unsplash.com/photo-1582719471384-894e8263e561?w=800&h=600&fit=crop&grayscale"
        ]
    },
    { 
        name: "Grey", 
        code: "#808080",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&ixlib=rb-1.2.1"
        ]
    }
];

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-id', product.id);

    // Create discount badge if applicable
    const originalPrice = product.originalPrice ? 
        `<span class="original-price">${product.originalPrice}</span>` : '';
    
    const discountBadge = product.discount ? 
        `<span class="product-badge">${product.discount}% OFF</span>` : '';

    // Create rating stars
    const rating = product.rating || 0;
    const fullStars = '★'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
    
    // Use product colors if available, otherwise use standard colors
    const colors = product.colors && product.colors.length > 0 ? product.colors : standardColors;
    
    // Generate color swatches HTML with data attributes
    const colorSwatchesHTML = colors.map((color, index) => {
        const isFirst = index === 0;
        const colorImage = color.image || product.image;
        return `
            <span class="color-swatch ${isFirst ? 'active' : ''}" 
                  style="background-color: ${color.code}" 
                  title="${color.name}"
                  data-color-name="${color.name}"
                  data-image="${colorImage}">
            </span>`;
    }).join('');
    
    // Set default color (first one)
    const defaultColor = colors[0];
    const defaultImage = defaultColor.image || product.image;
    
    card.innerHTML = `
        ${discountBadge}
        <div class="product-image-container">
            <img src="${defaultImage}" alt="${product.name} in ${defaultColor.name}" class="product-image" data-product-id="${product.id}">
        </div>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="color-options">
                <span class="color-label">Colors:</span>
                <div class="color-swatches">
                    ${colorSwatchesHTML}
                </div>
            </div>
            <div class="product-footer">
                <div class="price-container">
                    <span class="product-price">${product.price}</span>
                    ${originalPrice}
                </div>
                <div class="rating">
                    ${fullStars}${emptyStars}
                    <span class="rating-count">(${product.reviewCount || '0'})</span>
                </div>
            </div>
        </div>
    `;

    // Add click event to open modal
    card.addEventListener('click', (e) => {
        // Don't trigger modal if clicking on color swatches
        if (!e.target.closest('.color-swatch')) {
            openProductModal(product.id);
        }
    });

    // Add event delegation for color swatches
    const swatchElements = card.querySelectorAll('.color-swatch');
    const productImage = card.querySelector('.product-image');
    
    swatchElements.forEach(swatch => {
        swatch.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the card click event
            
            // Remove active class from all swatches
            swatchElements.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked swatch
            swatch.classList.add('active');
            
            // Update product image
            const newImage = swatch.dataset.image;
            const colorName = swatch.dataset.colorName;
            if (newImage) {
                // Add fade out effect
                productImage.style.opacity = '0';
                
                // After fade out, change image and fade in
                setTimeout(() => {
                    productImage.src = newImage;
                    productImage.alt = `${product.name} in ${colorName}`;
                    productImage.style.opacity = '1';
                    productImage.style.transition = 'opacity 0.3s ease-in-out';
                }, 150);
            }
        });
    });

    return card;
}

// Setup event listeners for the page
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterProducts(category);
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// Filter products by category
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Product modal functionality
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    // Find the product by ID
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Update modal content
    const modalImage = modal.querySelector('#modalProductImage');
    const modalName = modal.querySelector('#modalProductName');
    const modalPrice = modal.querySelector('#modalProductPrice');
    const modalDescription = modal.querySelector('#modalProductDescription');
    const modalFeatures = modal.querySelector('#modalProductFeatures');
    const modalSpecs = modal.querySelector('#modalProductSpecs');
    const thumbnailGallery = modal.querySelector('#thumbnailGallery');
    const colorOptions = modal.querySelector('.color-options');

    // Use product colors if available, otherwise use standard colors
    const colors = product.colors && product.colors.length > 0 ? product.colors : standardColors;
    
    // Set default color (first one)
    const defaultColor = colors[0];
    const defaultImage = defaultColor.image || product.image;
    const defaultGallery = defaultColor.gallery || product.gallery || [defaultImage];

    // Update main image
    if (modalImage) {
        modalImage.src = defaultImage;
        modalImage.alt = `${product.name} in ${defaultColor.name}`;
        modalImage.dataset.currentColor = defaultColor.name;
    }
    
    if (modalName) modalName.textContent = product.name;
    if (modalPrice) modalPrice.textContent = product.price;
    if (modalDescription) modalDescription.textContent = product.description;
    
    // Update features list
    if (modalFeatures && product.features) {
        modalFeatures.innerHTML = product.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
    }
    
    // Update specifications
    if (modalSpecs && product.specifications) {
        modalSpecs.innerHTML = Object.entries(product.specifications)
            .map(([key, value]) => `
                <div class="spec-item">
                    <span class="spec-key">${key}:</span>
                    <span class="spec-value">${value}</span>
                </div>`)
            .join('');
    }
    
    // Update color options
    if (colorOptions) {
        const colorSwatchesHTML = colors.map((color, index) => {
            const isFirst = index === 0;
            const colorImage = color.image || product.image;
            return `
                <span class="color-swatch ${isFirst ? 'active' : ''}" 
                      style="background-color: ${color.code}" 
                      title="${color.name}"
                      data-color-name="${color.name}"
                      data-color-image="${colorImage}"
                      data-color-gallery='${JSON.stringify(color.gallery || [colorImage])}'>
                </span>`;
        }).join('');
        
        colorOptions.innerHTML = `
            <span class="color-label">Color: <span id="selectedColorName">${defaultColor.name}</span></span>
            <div class="color-swatches">
                ${colorSwatchesHTML}
            </div>`;
            
        // Add event listeners for color swatches in modal
        const swatches = colorOptions.querySelectorAll('.color-swatch');
        swatches.forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Update active state
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                
                // Update selected color name
                const colorName = swatch.dataset.colorName;
                const colorImage = swatch.dataset.colorImage;
                const colorGallery = JSON.parse(swatch.dataset.colorGallery || '[]');
                
                document.getElementById('selectedColorName').textContent = colorName;
                
                // Update main image
                if (modalImage) {
                    modalImage.style.opacity = '0';
                    setTimeout(() => {
                        modalImage.src = colorImage;
                        modalImage.alt = `${product.name} in ${colorName}`;
                        modalImage.dataset.currentColor = colorName;
                        modalImage.style.opacity = '1';
                    }, 150);
                }
                
                // Update thumbnails
                if (thumbnailGallery) {
                    const gallery = colorGallery.length > 0 ? colorGallery : [colorImage];
                    thumbnailGallery.innerHTML = gallery
                        .map((img, index) => `
                            <div class="thumbnail" data-index="${index}">
                                <img src="${img}" alt="${product.name} - View ${index + 1}">
                            </div>`)
                        .join('');
                    
                    // Re-initialize thumbnail click handlers
                    const thumbnails = thumbnailGallery.querySelectorAll('.thumbnail');
                    thumbnails.forEach((thumb, index) => {
                        thumb.addEventListener('click', () => {
                            if (modalImage) {
                                modalImage.src = gallery[index];
                                modalImage.alt = `${product.name} - View ${index + 1}`;
                                
                                // Update active thumbnail
                                thumbnails.forEach(t => t.classList.remove('active'));
                                thumb.classList.add('active');
                            }
                        });
                    });
                    
                    // Set first thumbnail as active
                    if (thumbnails.length > 0) {
                        thumbnails[0].classList.add('active');
                    }
                }
            });
        });
    }
    
    // Update thumbnails
    if (thumbnailGallery) {
        const gallery = defaultGallery;
        thumbnailGallery.innerHTML = gallery
            .map((img, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${img}" alt="${product.name} ${index + 1}">
                </div>`)
            .join('');
    }
    
    // Show the modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Setup modal event listeners
    setupModalEventListeners(modal, product);
    
    // Show modal with animation
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Initialize performance optimizations
function optimizePerformance() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Enhanced carousel functionality
const initializeCarousel = () => {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;

    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    let currentSlide = 0;
    let slideInterval;
    const slideCount = slides.length;

    // Initialize carousel
    function initCarousel() {
        // Set initial positions
        updateCarousel();
        
        // Start autoplay
        startAutoSlide();
        
        // Add event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Add dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });
        
        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(slideInterval);
        }, { passive: true });
        
        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoSlide();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for a swipe
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) < swipeThreshold) return;
        
        if (swipeDistance > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
    }
    
    function updateCarousel() {
        // Hide all slides
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            slide.classList.remove('active');
            if (dots[index]) dots[index].classList.remove('active');
        });
        
        // Show current slide
        slides[currentSlide].style.display = 'flex';
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    function startAutoSlide() {
        // Clear any existing interval
        clearInterval(slideInterval);
        // Set new interval (5 seconds)
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Initialize the carousel
    initCarousel();
    
    // Pause autoplay when hovering over the carousel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
};

console.log('Script.js loaded successfully!');

// Initialize the page when DOM is fully loaded
function initializePage() {
    console.log('DOM fully loaded, initializing...');
    
    try {
        // Initialize animations
        animateOnScroll();
        
        // Add reveal class to all sections with data-animate attribute
        document.querySelectorAll('[data-animate]').forEach(section => {
            section.classList.add('reveal');
        });
        
        // Initialize carousel if it exists
        if (document.querySelector('.carousel')) {
            console.log('Initializing carousel...');
            initializeCarousel();
        }
        
        // Check if products container exists
        const productsContainer = document.getElementById('productsContainer');
        console.log('Products container found:', productsContainer);
        
        if (!productsContainer) {
            console.error('Products container not found in the DOM!');
            // Try to create it dynamically as a fallback
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                console.log('Creating products container dynamically...');
                const container = document.createElement('div');
                container.id = 'productsContainer';
                container.className = 'products-grid';
                container.style.display = 'grid';
                container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
                container.style.gap = '25px';
                container.style.width = '100%';
                container.style.padding = '20px 0';
                
                // Add after the filter buttons
                const filterButtons = productsSection.querySelector('.product-filters');
                if (filterButtons) {
                    filterButtons.insertAdjacentElement('afterend', container);
                    console.log('Dynamically added products container after filter buttons');
                } else {
                    productsSection.appendChild(container);
                    console.log('Dynamically added products container to products section');
                }
            }
        }
        
        // Load products after a short delay to ensure DOM is ready
        console.log('Scheduling products load...');
        setTimeout(() => {
            console.log('Calling loadProducts...');
            try {
                loadProducts();
            } catch (error) {
                console.error('Error in loadProducts:', error);
            }
        }, 100);
        
        // Trigger animations on load
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
    } catch (error) {
        console.error('Error during page initialization:', error);
    }
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializePage);

// Also try to initialize if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    console.log('DOM already ready, initializing...');
    initializePage();
}
    
// Initialize performance optimizations
optimizePerformance();

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navIcons = document.querySelector('.nav-actions');

if (navToggle && navLinks && navIcons) {
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navIcons.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (navIcons) navIcons.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
    });
});
