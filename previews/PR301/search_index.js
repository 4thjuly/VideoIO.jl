var documenterSearchIndex = {"docs":
[{"location":"functionindex/#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"functionindex/","page":"Index","title":"Index","text":"","category":"page"},{"location":"utilities/#Utilities","page":"Utilities","title":"Utilities","text":"","category":"section"},{"location":"utilities/#Test-Videos","page":"Utilities","title":"Test Videos","text":"","category":"section"},{"location":"utilities/","page":"Utilities","title":"Utilities","text":"A small number of test videos are available through VideoIO.TestVideos. These are short videos in a variety of formats with non-restrictive (public domain or Creative Commons) licenses.","category":"page"},{"location":"utilities/","page":"Utilities","title":"Utilities","text":"VideoIO.TestVideos.available","category":"page"},{"location":"utilities/#VideoIO.TestVideos.available","page":"Utilities","title":"VideoIO.TestVideos.available","text":"available()\n\nPrint a list of all available test videos.\n\n\n\n\n\n","category":"function"},{"location":"utilities/","page":"Utilities","title":"Utilities","text":"VideoIO.testvideo","category":"page"},{"location":"utilities/#VideoIO.TestVideos.testvideo","page":"Utilities","title":"VideoIO.TestVideos.testvideo","text":"testvideo(name, ops...)\n\nReturns an AVInput object for the given video name. The video will be downloaded if it isn't available.\n\n\n\n\n\n","category":"function"},{"location":"utilities/","page":"Utilities","title":"Utilities","text":"VideoIO.TestVideos.download_all","category":"page"},{"location":"utilities/#VideoIO.TestVideos.download_all","page":"Utilities","title":"VideoIO.TestVideos.download_all","text":"download_all()\n\nDownloads all test videos.\n\n\n\n\n\n","category":"function"},{"location":"utilities/","page":"Utilities","title":"Utilities","text":"VideoIO.TestVideos.remove_all","category":"page"},{"location":"utilities/#VideoIO.TestVideos.remove_all","page":"Utilities","title":"VideoIO.TestVideos.remove_all","text":"remove_all()\n\nRemove all test videos.\n\n\n\n\n\n","category":"function"},{"location":"lowlevel/#Low-level-functionality","page":"Low Level Functionality","title":"Low level functionality","text":"","category":"section"},{"location":"lowlevel/#FFMPEG-log-level","page":"Low Level Functionality","title":"FFMPEG log level","text":"","category":"section"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"FFMPEG's built-in logging and warning level can be read and set with","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"VideoIO.loglevel!","category":"page"},{"location":"lowlevel/#VideoIO.loglevel!","page":"Low Level Functionality","title":"VideoIO.loglevel!","text":"loglevel!(loglevel::Integer)\n\nSet FFMPEG log level. Options are:\n\nVideoIO.AVUtil.AV_LOG_QUIET\nVideoIO.AVUtil.AV_LOG_PANIC\nVideoIO.AVUtil.AV_LOG_FATAL\nVideoIO.AVUtil.AV_LOG_ERROR\nVideoIO.AVUtil.AV_LOG_WARNING\nVideoIO.AVUtil.AV_LOG_INFO\nVideoIO.AVUtil.AV_LOG_VERBOSE\nVideoIO.AVUtil.AV_LOG_DEBUG\nVideoIO.AVUtil.AV_LOG_TRACE\n\n\n\n\n\n","category":"function"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"VideoIO.loglevel","category":"page"},{"location":"lowlevel/#VideoIO.loglevel","page":"Low Level Functionality","title":"VideoIO.loglevel","text":"loglevel() -> String\n\nGet FFMPEG log level as a variable name string.\n\n\n\n\n\n","category":"function"},{"location":"lowlevel/#FFMPEG-interface","page":"Low Level Functionality","title":"FFMPEG interface","text":"","category":"section"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"Each ffmpeg library has its own VideoIO subpackage:","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"libavcodec    -> AVCodecs\nlibavdevice   -> AVDevice\nlibavfilter   -> AVFilters\nlibavformat   -> AVFormat\nlibavutil     -> AVUtil\nlibswscale    -> SWScale","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"The following three files are related to ffmpeg, but currently not exposed:","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"libswresample -> SWResample\nlibpostproc   -> PostProc   (not wrapped)","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"After importing VideoIO, you can import and use any of the subpackages directly","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"import VideoIO\nimport SWResample  # SWResample functions are now available","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"Note that much of the functionality of these subpackages is not enabled by default, to avoid long compilation times as they load.  To control what is loaded, each library version has a file which imports that's modules files.  For example, ffmpeg's libswscale-v2 files are loaded by VideoIO_PKG_DIR/src/ffmpeg/SWScale/v2/LIBSWSCALE.jl.","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"Check these files to enable any needed functionality that isn't already enabled. Note that you'll probably need to do this for each version of the package for ffmpeg, and that the interfaces do change some from version to version.","category":"page"},{"location":"lowlevel/","page":"Low Level Functionality","title":"Low Level Functionality","text":"Note that, in general, the low-level functions are not very fun to use, so it is good to focus initially on enabling a nice, higher-level function for these interfaces.","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"This library provides methods for reading and writing video files.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Functionality is based on a dedicated build of ffmpeg, provided via JuliaPackaging/Yggdrasil","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Explore the source at github.com/JuliaIO/VideoIO.jl","category":"page"},{"location":"#Platform-Nodes:","page":"Introduction","title":"Platform Nodes:","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"ARM: For truly lossless reading & writing, there is a known issue on ARM that results in small precision differences when reading/writing some video files. As such, tests for frame comparison are currently skipped on ARM. Issues/PRs welcome for helping to get this fixed.","category":"page"},{"location":"#Installation","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"pkg> add VideoIO","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Or, equivalently, via the Pkg API:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> import Pkg; Pkg.add(\"VideoIO\")","category":"page"},{"location":"reading/#Video-Reading","page":"Reading Videos","title":"Video Reading","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Note: Reading of audio streams is not yet implemented","category":"page"},{"location":"reading/#Reading-Video-Files","page":"Reading Videos","title":"Reading Video Files","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO contains a simple high-level interface which allows reading of video frames from a supported video file (or from a camera device, shown later).","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"using VideoIO\n\n# Construct a AVInput object to access the video and audio streams in a video container\n# io = VideoIO.open(video_file)\nio = VideoIO.testvideo(\"annie_oakley\") # for testing purposes\n\n# Access the video stream in an AVInput, and return a VideoReader object:\nf = VideoIO.openvideo(io) # you can also use a file name, instead of a AVInput\n\nimg = read(f)\n\nwhile !eof(f)\n    read!(f, img)\n    # Do something with frames\nend\nclose(f)","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Alternatively, you can open the video stream in a file directly with VideoIO.openvideo(filename), without making an intermediate AVInput object, if you only need the video.","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO also provides an iterator interface for VideoReader, which behaves like other mutable iterators in Julia (e.g. Channels). If iteration is stopped early, for example with a break statement, then it can be resumed in the same spot by iterating on the same VideoReader object. Consequently, if you have already iterated over all the frames of a VideoReader object, then it will be empty for further iteration unless its position in the video is changed with seek.","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"using VideoIO\n\n\nio = VideoIO.testvideo(\"annie_oakley\")\nf = VideoIO.openvideo(io)\n\nfor img in f\n    # Do something with img\nend\n\n# You can also use collect(f) to get all of the frames\n\n# Further iteration will show that f is now empty!\n\nclose(f)","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Seeking through the video can be achieved via seek(f, seconds::Float64) and seekstart(f) to return to the start.","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.seek","category":"page"},{"location":"reading/#Base.seek","page":"Reading Videos","title":"Base.seek","text":"seek(reader::VideoReader, seconds)\n\nSeeks into the parent AVInput using this video stream's index. See [seek] for AVInput.\n\n\n\n\n\nseek(avin::AVInput, seconds::AbstractFloat, video_stream::Integer=1)\n\nSeek through the container format avin so that the next frame returned by the stream indicated by video_stream will have a timestamp greater than or equal to seconds.\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.seekstart","category":"page"},{"location":"reading/#Base.seekstart","page":"Reading Videos","title":"Base.seekstart","text":"seekstart(reader::VideoReader)\n\nSeek to time zero of the parent AVInput using reader's stream index. See seekstart for AVInput objects.\n\n\n\n\n\nseekstart(avin::AVInput{T}, video_stream_index=1) where T <: AbstractString\n\nSeek to time zero of AVInput object.\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Frames can be skipped without reading frame content via skipframe(f) and skipframes(f, n)","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.skipframe","category":"page"},{"location":"reading/#VideoIO.skipframe","page":"Reading Videos","title":"VideoIO.skipframe","text":"skipframe(s::VideoReader; throwEOF=true)\n\nSkip the next frame. If End of File is reached, EOFError thrown if throwEOF=true. Otherwise returns true if EOF reached, false otherwise.\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.skipframes","category":"page"},{"location":"reading/#VideoIO.skipframes","page":"Reading Videos","title":"VideoIO.skipframes","text":"skipframes(s::VideoReader, n::Int; throwEOF=true) -> n\n\nSkip the next n frames. If End of File is reached and throwEOF=true, a EOFError will be thrown. Returns the number of frames that were skipped.\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Total available frame count is available via counttotalframes(f)","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.counttotalframes","category":"page"},{"location":"reading/#VideoIO.counttotalframes","page":"Reading Videos","title":"VideoIO.counttotalframes","text":"counttotalframes(reader) -> n::Int\n\nCount the total number of frames in the video by seeking to start, skipping through each frame, and seeking back to the start.\n\nFor a faster alternative that relies on video container metadata, try get_number_frames.\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"!!! note H264 videos encoded with crf>0 have been observed to have 4-fewer frames available for reading.","category":"page"},{"location":"reading/#Changing-the-target-pixel-format-for-reading","page":"Reading Videos","title":"Changing the target pixel format for reading","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"It can be helpful to be explicit in which pixel format you wish to read frames as. Here a grayscale video is read and parsed into a Vector(Array{UInt8}}","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"f = VideoIO.openvideo(filename, target_format=VideoIO.AV_PIX_FMT_GRAY8)\n\nwhile !eof(f)\n    img = reinterpret(UInt8, read(f))\nend\nclose(f)","category":"page"},{"location":"reading/#Video-Playback","page":"Reading Videos","title":"Video Playback","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"A trivial video player interface exists (no audio) through Makie.jl. Note: Makie must be imported first to enable playback functionality.","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"using Makie\nusing VideoIO\n\nf = VideoIO.testvideo(\"annie_oakley\")  # downloaded if not available\nVideoIO.playvideo(f)  # no sound","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Customization of playback can be achieved by looking at the basic expanded version of this function:","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"import Makie\nimport VideoIO\n\n#io = VideoIO.open(video_file)\nio = VideoIO.testvideo(\"annie_oakley\") # for testing purposes\nf = VideoIO.openvideo(io)\n\nimg = read(f)\nscene = Makie.Scene(resolution = reverse(size(img)))\nmakieimg = Makie.image!(scene, img, show_axis = false, scale_plot = true)[end]\nMakie.rotate!(scene, -0.5pi)\ndisplay(scene)\n\nwhile !eof(f)\n    read!(f, img)\n    makieimg[1] = img\n    sleep(1/f.framerate)\nend","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"This code is essentially the code in playvideo, and will read and (without the sleep) play a movie file as fast as possible.","category":"page"},{"location":"reading/#Reading-Camera-Output","page":"Reading Videos","title":"Reading Camera Output","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"Frames can be read iteratively","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"using VideoIO\ncam = VideoIO.opencamera()\nfor i in 1:100\n    img = read(cam)\n    sleep(1/cam.framerate)\nend","category":"page"},{"location":"reading/#Webcam-playback","page":"Reading Videos","title":"Webcam playback","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"The default system webcam can be viewed directly","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"using Makie\nusing VideoIO\nVideoIO.viewcam()","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"An expanded version of this approach:","category":"page"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"import Makie, VideoIO\n\ncam = VideoIO.opencamera()\n\nimg = read(cam)\nscene = Makie.Scene(resolution = size(img'))\nmakieimg = Makie.image!(scene, img, show_axis = false, scale_plot = false)[end]\nMakie.rotate!(scene, -0.5pi)\ndisplay(scene)\n\nwhile isopen(scene)\n    read!(cam, img)\n    makieimg[1] = img\n    sleep(1/cam.framerate)\nend\n\nclose(cam)","category":"page"},{"location":"reading/#Video-Properties-and-Metadata","page":"Reading Videos","title":"Video Properties & Metadata","text":"","category":"section"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.get_start_time","category":"page"},{"location":"reading/#VideoIO.get_start_time","page":"Reading Videos","title":"VideoIO.get_start_time","text":"get_start_time(file::String) -> DateTime\n\nReturn the starting date & time of the video file. Note that if the starting date & time are missing, this function will return the Unix epoch (00:00 1st January 1970).\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.get_time_duration","category":"page"},{"location":"reading/#VideoIO.get_time_duration","page":"Reading Videos","title":"VideoIO.get_time_duration","text":"get_time_duration(file::String) -> (DateTime, Microsecond)\n\nReturn the starting date & time as well as the duration of the video file. Note that if the starting date & time are missing, this function will return the Unix epoch (00:00 1st January 1970).\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.get_duration","category":"page"},{"location":"reading/#VideoIO.get_duration","page":"Reading Videos","title":"VideoIO.get_duration","text":"get_duration(file::String) -> Float64\n\nReturn the duration of the video file in seconds (float).\n\n\n\n\n\n","category":"function"},{"location":"reading/","page":"Reading Videos","title":"Reading Videos","text":"VideoIO.get_number_frames","category":"page"},{"location":"reading/#VideoIO.get_number_frames","page":"Reading Videos","title":"VideoIO.get_number_frames","text":"get_number_frames(file [, streamno])\n\nQuery the the container file for the number of frames in video stream streamno if applicable, instead returning nothing if the container does not report the number of frames. Will not decode the video to count the number of frames in a video.\n\n\n\n\n\n","category":"function"},{"location":"writing/#Writing-Videos","page":"Writing Videos","title":"Writing Videos","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"Note: Writing of audio streams is not yet implemented","category":"page"},{"location":"writing/#Single-step-Encoding","page":"Writing Videos","title":"Single-step Encoding","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"Videos can be encoded directly from image stack using encode_mux_video(filename::String, imgstack::Array) where imgstack is an array of image arrays with identical type and size.","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"The entire image stack can be encoded in a single step:","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"using VideoIO\nencoder_settings = (\"crf\"=>\"22\",\"preset\"=>\"medium\")]\nencode_mux_video(\"video.mp4\", imgstack, framerate=30, encoder_settings=encoder_settings)","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"VideoIO.encode_mux_video","category":"page"},{"location":"writing/#VideoIO.encode_mux_video","page":"Writing Videos","title":"VideoIO.encode_mux_video","text":"encode_mux_video(filename::String, imgstack; ...)\n\nCreate a video container filename and encode the set of frames imgstack into it. imgstack must be an iterable of matrices and each frame must have the same dimensions and element type.\n\nEncoding settings, restrictions on frame size and element type, and other details are described in open_video_out. All keyword arguments are passed to open_video_out.\n\nSee also: open_video_out, append_encode_mux!, close_video_out!\n\n\n\n\n\n","category":"function"},{"location":"writing/#Iterative-Encoding","page":"Writing Videos","title":"Iterative Encoding","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"Alternatively, videos can be encoded iteratively within custom loops.","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"using VideoIO\nframestack = map(x->rand(UInt8, 100, 100), 1:100) #vector of 2D arrays\n\nencoder_settings = (crf=\"22\", preset=\"medium\")\nframerate=24\nopen_video_out(\"video.mp4\", framestack[1], framerate=framerate, encoder_settings=encoder_settings) do writer\n    for i in eachindex(framestack)\n        append_encode_mux!(writer, framestack[i], i)\n    end\nend","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"An example saving a series of png files as a video:","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"using VideoIO, ProgressMeter\n\ndir = \"\" #path to directory holding images\nimgnames = filter(x->occursin(\".png\",x), readdir(dir)) # Populate list of all .pngs\nintstrings =  map(x->split(x,\".\")[1], imgnames) # Extract index from filenames\np = sortperm(parse.(Int, intstrings)) #sort files numerically\nimgnames = imgnames[p]\n\nencoder_settings = (crf=\"22\", preset=\"medium\")\n\nfirstimg = load(joinpath(dir, imgnames[1]))\nopen_video_out(\"video.mp4\", firstimg, framerate=24, encoder_settings=encoder_settings) do writer\n    @showprogress \"Encoding video frames..\" for i in eachindex(imgnames)\n        img = load(joinpath(dir, imgnames[i]))\n        append_encode_mux!(writer, img, i)\n    end\nend","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"VideoIO.encode_mux_video","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"VideoIO.open_video_out","category":"page"},{"location":"writing/#VideoIO.open_video_out","page":"Writing Videos","title":"VideoIO.open_video_out","text":"open_video_out(filename, ::Type{T}, sz::NTuple{2, Integer};\n               <keyword arguments>) -> writer\nopen_video_out(filename, first_img::Matrix; ...)\nopen_video_out(f, ...; ...)\n\nOpen file filename and prepare to encode a video stream into it, returning object writer that can be used to encode frames. The size and element type of the video can either be specified by passing the first frame of the movie first_img, which will not be encoded, or instead the element type T and 2-tuple size sz. If the size is explicitly specified, the first element will be the height, and the second width, unless keyword argument scanline_major = true, in which case the order is reversed. Both height and width must be even. The element type T must be one of the supported element types, which is any key of VideoIO.VIO_DEF_ELTYPE_PIX_FMT_LU, or instead the Normed or Unsigned type for a corresponding Gray element type. The container type will be inferred from filename.\n\nFrames are encoded with append_encode_mux!, which must use frames with the same size, element type, and obey the same value of scanline_major. The video must be closed once all frames are encoded with close_video_out!.\n\nIf called with a function as the first argument, f, then the function will be called with the writer object writer as its only argument. This writer object will be closed once the call is complete, regardless of whether or not an error occurred.\n\nKeyword arguments\n\ncodec_name::Union{AbstractString, Nothing} = nothing: Name of the codec to   use. Must be a name accepted by FFmpeg, and   compatible with the chosen container type, or nothing, in which case the   codec will be automatically selected by FFmpeg based on the container.\nframerate::Real = 24: Framerate of the resulting video.\nscanline_major::Bool = false: If false, then Julia arrays are assumed to   have frame height in the first dimension, and frame width on the second. If   true, then pixels that adjacent to eachother in the same scanline (i.e.   horizontal line of the video) are assumed to be adjacent to eachother in   memory. scanline_major = true videos must be StridedArrays with unit   stride in the first dimension. For normal arrays, this corresponds to a   matrix where frame width is in the first dimension, and frame height is in   the second.\ncontainer_settings::SettingsT = (;): A NamedTuple or Dict{Symbol, Any}   of settings for the container. Must correspond to option names and values   accepted by FFmpeg.\ncontainer_private_settings::SettingsT = (;): A NamedTuple or   Dict{Symbol, Any} of private settings for the container. Must correspond   to private options names and values accepted by   FFmpeg for the chosen container type.\nencoder_settings::SettingsT = (;): A NamedTuple or Dict{Symbol, Any} of   settings for the encoder context. Must correspond to option names and values   accepted by FFmpeg.\nencoder_private_settings::SettingsT = (;): A NamedTuple or   Dict{Symbol, Any} of private settings for the encoder context. Must   correspond to private option names and values accepted by   FFmpeg for the chosen codec specified by codec_name.\nswscale_settings::SettingsT = (;): A Namedtuple, or Dict{Symbol, Any} of   settings for the swscale object used to perform color space scaling. Options   must correspond with options for FFmpeg's   scaler filter.\ntarget_pix_fmt::Union{Nothing, Cint} = nothing: The pixel format that will   be used to input data into the encoder. This can either by a   VideoIO.AV_PIX_FMT_* value corresponding to a FFmpeg   AVPixelFormat,   and must then be a format supported by the encoder, or instead nothing,   in which case it will be chosen automatically by FFmpeg.\npix_fmt_loss_flags = 0: Loss flags to control how encoding pixel format is   chosen. Only valid if target_pix_fmt = nothing. Flags must correspond to   FFmpeg   loss flags.\ninput_colorspace_details = nothing: Information about the color space   of input Julia arrays. If nothing, then this will correspond to a   best-effort interpretation of Colors.jl for the corresponding element type.   To override these defaults, create a VideoIO.VioColorspaceDetails object   using the appropriate AVCOL_ definitions from FFmpeg, or use   VideoIO.VioColorspaceDetails() to use the FFmpeg defaults. If data in the   input Julia arrays is already in the mpeg color range, then set this to   VideoIO.VioColorspaceDetails() to avoid additional scaling by sws_scale.\nallow_vio_gray_transform = true: Instead of using sws_scale for gray data,   use a more accurate color space transformation implemented in VideoIO if   allow_vio_gray_transform = true. Otherwise, use sws_scale.\nsws_color_details::SettingsT = (;): Additional keyword arguments passed to   sws_setColorspaceDetails.\n\nSee also: append_encode_mux!, close_video_out!\n\n\n\n\n\n","category":"function"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"VideoIO.append_encode_mux!","category":"page"},{"location":"writing/#VideoIO.append_encode_mux!","page":"Writing Videos","title":"VideoIO.append_encode_mux!","text":"append_encode_mux!(writer, img, index)\n\nPrepare frame img for encoding, encode it, mux it, and either cache it or write it to the file described by writer. Indices must start at zero, i.e. for the first frame set index = 0, and subsequent calls increment index by one. img must be the same size and element type as the size and element type that was used to create writer.\n\n\n\n\n\n","category":"function"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"VideoIO.close_video_out!","category":"page"},{"location":"writing/#VideoIO.close_video_out!","page":"Writing Videos","title":"VideoIO.close_video_out!","text":"close_video_out!(writer)\n\nWrite all frames cached in writer to the video container that it describes, and then close the file. Once all frames in a video have been added to writer, then it must be closed with this function to flush any cached frames to the file, and then finally close the file and release resources associated with writer.\n\n\n\n\n\n","category":"function"},{"location":"writing/#Supported-Colortypes","page":"Writing Videos","title":"Supported Colortypes","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"Encoding of the following image element color types currently supported:","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"UInt8\nGray{N0f8}\nRGB{N0f8}","category":"page"},{"location":"writing/#Encoder-Settings","page":"Writing Videos","title":"Encoder Settings","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"The AVCodecContextProperties object allows control of the majority of settings required. Optional fields can be found here.","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"A few helpful presets for h264:","category":"page"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"Goal AVCodecContextProperties value\nPerceptual compression, h264 default. Best for most cases (priv_data = (crf=\"23\", preset=\"medium\"))\nLossless compression. Fastest, largest file size (priv_data = (crf=\"0\", preset=\"ultrafast\"))\nLossless compression. Slowest, smallest file size (priv_data = (crf=\"0\", preset=\"ultraslow\"))\nDirect control of bitrate and frequency of intra frames (every 10) [:bit_rate => 400000,:gop_size = 10,:max_b_frames=1]","category":"page"},{"location":"writing/#Lossless-Encoding","page":"Writing Videos","title":"Lossless Encoding","text":"","category":"section"},{"location":"writing/#Lossless-RGB","page":"Writing Videos","title":"Lossless RGB","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"If lossless encoding of RGB{N0f8} is required, true lossless requires using codec_name = \"libx264rgb\", to avoid the lossy RGB->YUV420 conversion, and \"crf\" => \"0\".","category":"page"},{"location":"writing/#Lossless-Grayscale","page":"Writing Videos","title":"Lossless Grayscale","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"If lossless encoding of Gray{N0f8} or UInt8 is required, \"crf\" => \"0\" should be set, as well as :color_range=>2 to ensure full 8-bit pixel color representation. i.e. [:color_range=>2, :priv_data => (\"crf\"=>\"0\",\"preset\"=>\"medium\")]","category":"page"},{"location":"writing/#Encoding-Performance","page":"Writing Videos","title":"Encoding Performance","text":"","category":"section"},{"location":"writing/","page":"Writing Videos","title":"Writing Videos","text":"See examples/lossless_video_encoding_testing.jl for testing of losslessness, speed, and compression as a function of h264 encoding preset, for 3 example videos.","category":"page"}]
}
